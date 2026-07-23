import pool from "../database/db.js"

export default {
    async getOrder(orderId) {
        const order = await pool.query(
            `
            SELECT
                o.id AS order_id,
                CONCAT_WS(' ', c.first_name, c.last_name) AS full_name,
                o.status,
                o.created_at,
                p.title AS product_name,
                p.image AS product_image,
                p.price AS product_price,
                op.quantity,
                o.total_price
            FROM
                orders_products AS op
            JOIN
                orders AS o
                ON o.id = op.order_id
            JOIN
                products AS p
                ON p.id = op.product_id
            JOIN
                customers AS c
                ON c.id = o.customer_id
            WHERE
                o.id = $1;
            `,
            [orderId]
        );

        return order.rows[0];
    },

    async getAllConfirmedOrders() {
        const result = await pool.query(
            `
            SELECT
                o.id AS order_id,
                CONCAT_WS(' ', c.first_name, c.last_name) AS full_name,
                o.status,
                o.created_at,
                p.title AS product_name,
                p.image AS product_image,
                p.price AS product_price,
                op.quantity,
                o.total_price
            FROM
                orders_products AS op
            JOIN
                orders AS o
                ON o.id = op.order_id
            JOIN
                products AS p
                ON p.id = op.product_id
            JOIN
                customers AS c
                ON c.id = o.customer_id
            WHERE
                o.status = 'CONFIRMED';
            ORDER BY
                order_id;
            `
        );

        const orders = {};

        for (const row of result.rows) {
            if (!orders[row.order_id]) {
                orders[row.order_id] = {
                    id: row.order_id,
                    customer = row.full_name,
                    status = row.status,
                    createdAt = row.created_at,
                    totalPrice = row.totalPrice,
                    products: []
                };
            }

            orders[row.order_id].products.push({
                name: row.product_name,
                price: row.product_price,
                image: row.product_image,
                quantity: row.quantity
            });
        }

        return Object.values(orders);
    },

    async getAllOrdersOfCustomer(customerId) {
        const result = await pool.query(
            `
            SELECT
                o.id AS order_id,
                CONCAT_WS(' ', c.first_name, c.last_name) AS full_name,
                o.status,
                o.created_at,
                p.title AS product_name,
                p.image AS product_image,
                p.price AS product_price,
                op.quantity,
                o.total_price
            FROM
                orders_products AS op
            JOIN
                orders AS o
                ON o.id = op.order_id
            JOIN
                products AS p
                ON p.id = op.product_id
            JOIN
                customers AS c
                ON c.id = o.customer_id
            WHERE
                o.customer_id = $1
            ORDER BY
                order_id;
            `,
            [customerId]
        );

        const orders = {};

        for (const row of result.rows) {
            if (!orders[row.order_id]) {
                orders[row.order_id] = {
                    id: row.order_id,
                    customer = row.full_name,
                    status = row.status,
                    createdAt = row.created_at,
                    totalPrice = row.totalPrice,
                    products: []
                };
            }

            orders[row.order_id].products.push({
                name: row.product_name,
                price: row.product_price,
                image: row.product_image,
                quantity: row.quantity
            });
        }

        return Object.values(orders);
        
    },

    async addProductToCart(customerId, productId, quantity) {
        const client = await pool.connect();
        let orderId = '';

        try {
            await client.query(`BEGIN`);

            const activeOrderCheck = await client.query(
                `
                SELECT *
                FROM
                    orders
                WHERE
                    customerId = $1
                        AND
                    status = 'PENDING'
                RETURNNG *;
                `,
                [customerId]
            );

            if (activeOrderCheck.rows.length === 0) {
                const newOrder = await client.query(
                    `
                    INSERT INTO
                        orders(customer_id, status)
                    VALUES
                        ($1, 'PENDING')
                    RETURNING *;
                    `,
                    [customerId]
                );

                orderId = newOrder.rows[0].id;
            } else {
                orderId = activeOrderCheck.rows[0].id
            }

            await client.query(
                `
                INSERT INTO
                    orders_products(order_id, product_id, quantity)
                VALUES
                    ($1, $2, $3);
                `,
                [orderId, productId, quantity]
            );

            await client.query(
                `
                UPDATE
                    orders
                SET total_price = (
                    SELECT
                        SUM(op.quantity * p.price)
                    FROM
                        orders_products AS op
                    JOIN
                        products AS p
                        ON op.product_id = p.id
                    WHERE
                        op.order_id = $1
                )
                WHERE
                    id = $1;
                `,
                [orderId]
            );

            await client.query(`COMMIT`)

        } catch (error) {

            await client.query(`ROLLBACK`);
            throw error;

        } finally {
            client.release();
        }
    },

    async removeProductFromCart(orderId, productId) {
        const client = await pool.connect();

        try {
            await client.query(`BEGIN`);

            await client.query(
                `
            DELETE FROM
                orders_products
            WHERE
                order_id = $1
                    AND
                product_id = $2;
            `,
                [orderId, productId]
            );

            const orderStillActive = await client.query(
                `
            SELECT
                *
            FROM
                orders_products
            WHERE
                order_id = $1
            RETURNING *;
            `,
                [orderId]
            );

            if (orderStillActive.rows.length === 0) {
                await client.query(
                    `
                DELETE FROM
                    orders
                WHERE
                    id = $1;
                `,
                    [orderId]
                );
            } else {
                await client.query(
                    `
                    UPDATE
                        orders
                    SET total_price = COALESCE((
                        SELECT
                            SUM(op.quantity * p.price)
                        FROM
                            orders_products AS op
                        JOIN
                            products AS p
                            ON op.product_id = p.id
                        WHERE
                            op.order_id = $1
                            ), 0)
                    WHERE
                        id = $1;
                    `)
            }

            await client.query(`COMMIT`);

        } catch (error) {

            await client.query(`ROLLBACK`);
            throw error;

        } finally {
            client.release();
        }

    },

    async removeEverythingFromCart(orderId) {
        await pool.query(
            `
            DELETE FROM
                orders
            WHERE
                id = $1
                    AND
                status = "PENDING";
            `,
            [orderId]
        );
    },

    async finalizeOrder(orderId) {
        await pool.query(
            `
                UPDATE
                    orders
                SET
                    status = "CONFIRMED"
                WHERE
                    id = $1;
                `,
            [orderId]
        );
    },

    async cancelOrder(orderId) {
        await pool.query(
            `
                UPDATE
                    orders
                SET
                    status = "CANCELLED"
                WHERE
                    id = $1
                        AND
                    status = "CONFIRMED";
                `,
            [orderId]
        )
    }
}