import pool from "../database/db.js"

export default {
    async getAllProducts(filter = {}) {
        let query = `
        SELECT  
            p.id,
            p.title,
            p.price,
            p.image,
            c.name AS category,
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
                p.added_on
            FROM
                products AS p
            JOIN
                categories AS c
            ON
                p.category = c.id
            WHERE
                p.id = $1;
            `,
            [productId]
        );

        return result.rows[0];
    },

    async addNewProduct(productData) {
        const { title, description, price, category, image } = productData;

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

        return result.rows[0];
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

    async editProduct(productId, newProductData) {
        const { title, description, price, category_id, image } = newProductData;

        const result = await pool.query(
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
            [title, description, price, category_id, image, productId]
        );

        return result.rows[0];
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
                *
            FROM
                categories
            ORDER BY
                id;
            `
        );

        return result.rows
    }
}