import pool from "../database/db.js"

export default {
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
                    ($1, $2, $3)
                RETURNING *;
                `,
                [orderId, productId, quantity]
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
                id = $1;
            `,
            [orderId]
        );
    },

    finalizeOrder(orderId) {
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

    cancelOrder(orderId) {
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