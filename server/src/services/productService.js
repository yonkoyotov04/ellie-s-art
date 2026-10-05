import pool from "../database/db.js"
import errorApi from "../utils/errorUtil.js";

export default {
    async getAllProducts(filter = {}) {
        let query = `
        SELECT  
            p.id,
            p.title,
            p.price,
            p.image,
            c.name AS category,
            p.active,
            p.added_on
        FROM 
            products AS p
        JOIN
            categories AS c
        ON
            p.category = c.id
        `;
        let conditions = [];
        let values = [];

        if (filter.active) {
            values.push(filter.active);
            conditions.push(`active = $${values.length}`)
        }

        if (filter.category) {
            values.push(filter.category);
            conditions.push(`category = $${values.length}`)
        }

        if (filter.search) {
            values.push(`%${filter.search}%`);
            conditions.push(`title ILIKE $${values.length}`)
        }

        if (conditions.length > 0) {
            query += `WHERE ${conditions.join(' AND ')}
            
            `;
        }

        if (filter.sort === 'newest') {
            query += `ORDER BY added_on DESC
            `;
        } else if (filter.sort === 'popular') {
            query += `ORDER BY clicks DESC
            `;
        } else if (filter.sort === 'lowestPrice') {
            query += `ORDER BY price ASC
            `;
        } else if (filter.sort === 'highestPrice') {
            query += `ORDER BY price DESC
            `;
        } else if (filter.sort === 'titleAsc') {
            query += `ORDER BY title ASC
            `;
        } else if (filter.sort === 'titleDesc') {
            query += `ORDER BY title DESC
            `;
        }

        if (filter.limit) {
            query += `LIMIT ${filter.limit}`;
        }

        const result = await pool.query(query, values);

        return result.rows;
    },

    // async getAllProductsSortedByTime() {
    //     const result = await pool.query(
    //         `
    //         SELECT 
    //             p.id,
    //             p.title,
    //             p.price,
    //             p.image,
    //             c.name AS category,
    //             p.added_on
    //         FROM 
    //             products AS p
    //         JOIN
    //             categories AS c
    //         ON
    //             p.category = c.id
    //         ORDER BY
    //             added_on ASC;
    //         `
    //     );

    //     return result.rows;
    // },

    async getSpecificProduct(productId) {
        const result = await pool.query(
            `
            SELECT
                p.id,
                p.title,
                p.price,
                p.image,
                p.description,
                c.name AS category,
                p.category AS category_id, 
                p.added_on,
                COALESCE(json_agg(pi.path ORDER BY pi.position) 
	                        FILTER(WHERE pi.id IS NOT NULL), '[]') AS images
            FROM
                products AS p
            JOIN
                categories AS c
            ON
                p.category = c.id
            LEFT JOIN
                product_images AS pi
            ON
                pi.product_id = p.id
            WHERE
                p.id = $1
            GROUP BY
                p.id,
				p.title,
				p.price,
				p.image,
				p.description,
				p.category,
				p.added_on,
				c.name;
            `,
            [productId]
        );

        return result.rows[0];
    },

    async addNewProduct(productData) {
        const { title, description, price, category, image, images } = productData;
        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            const result = await pool.query(
                `
            INSERT INTO
                products(title, description, price, category, image)
            VALUES
                ($1, $2, $3, $4, $5)
            RETURNING *;
            `,
                [title, description, price, category, image]
            );

            const product = result.rows[0];

            for (let i = 0; i < images.length; i++) {
                await client.query(
                    `INSERT INTO
                        product_images(product_id, path, position)
                    VALUES
                        ($1, $2, $3)`,
                    [product.id, images[i], i]
                )
            }

            await client.query('COMMIT');
            return product;
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    },

    async addAClick(productId) {
        const result = await pool.query(
            `
            UPDATE
                products
            SET
                clicks = clicks + 1
            WHERE
                id = $1
            RETURNING *
            `,
            [productId]
        )

        if (result.rowCount === 0) {
            return result.status(404).send('Product not found');
        };

        return result.rows[0];
    },

    async checkCategory(categoryName) {
        const result = await pool.query(
            `
                SELECT
                    *
                FROM
                    categories
                WHERE
                    name = $1;
            `,
            [categoryName]
        )

        return result.rows;
    },

    async addNewCategory(categoryName) {
        const result = await pool.query(
            `
            INSERT INTO
                categories(name)
            VALUES
                ($1)
            RETURNING *;
            `,
            [categoryName]
        );

        return result.rows[0];
    },

    async editProduct(productId, newProductData, keptPaths, newPaths) {
        const { title, description, price, category_id, image } = newProductData;

        const client = await pool.connect();

        try {
            await client.query('BEGIN');
        
            const currentProductResult = await client.query(
                `
                SELECT
                    id,
                    path,
                    position
                FROM
                    product_images
                WHERE
                    product_id = $1
                `,
                [productId]
            );

            const current = currentProductResult.rows;

            const toDelete = current.filter(row => !keptPaths.includes(row.path));

            const maxKeptPosition = current
                .filter(row => keptPaths.includes(row.path))
                .reduce((max, row) => Math.max(max, row.position), -1);
            
            for (const row of toDelete) {
                await client.query(
                    `DELETE FROM
                        product_images
                    WHERE
                        id = $1
                    `,
                    [row.id]);
            }

            for (let i = 0; i < newPaths.length; i++) {
                await client.query(
                    `
                    INSERT INTO
                        product_images(product_id, path, position)
                    VALUES
                        ($1, $2, $3)
                    `,
                    [productId, newPaths[i], maxKeptPosition + 1 + i]
                );
            }

            const cover = keptPaths[0] ?? newPaths[0] ?? null;

            const result = await client.query(
                `
                UPDATE 
                    products
                SET
                    title = $1,
                    description = $2,
                    price = $3,
                    category = $4,
                    image = $5
                WHERE
                    id = $6
                RETURNING *;
            `,
                [title, description, price, category_id, cover, productId]
            )

            await client.query(`COMMIT`);

            return {product: result.rows[0], removedPaths: toDelete.map(row => row.path)}
        } catch (error) {
            await client.query(`ROLLBACK`);
            throw new errorApi(error);
        } finally {
            client.release();
        }
    },

    async deleteProduct(productId) {
        const result = await pool.query(
            `
            DELETE FROM
                products
            WHERE
                id = $1
            RETURNING *;
            `,
            [productId]
        );

        return result.rows[0];
    },

    async getCategories() {
        const result = await pool.query(
            `
            SELECT 
                c.id,
                c.name,
                COUNT(p.id) AS product_count
            FROM
                categories AS c
            LEFT JOIN
                products AS p
            ON 
                p.category = c.id
            GROUP BY
                c.id, c.name
            ORDER BY
                c.id;
            `
        );

        return result.rows
    },

    async getCount() {
        const result = await pool.query(
            `
            SELECT COUNT(*) FROM products
            `
        )

        return parseInt(result.rows[0].count, 10)
    },

    async activateProduct(productId) {
        const result = await pool.query(
            `
            UPDATE
                products
            SET
                active = true
            WHERE
                id = $1
            RETURNING *;
            `,
            [productId]
        );

        return result.rows[0];
    },

    async deactivateProduct(productId) {
        const result = await pool.query(
            `
            UPDATE
                products
            SET
                active = false
            WHERE
                id = $1
            RETURNING *;
            `,
            [productId]
        );

        return result.rows[0];
    }
}