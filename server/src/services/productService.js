import pool from "../database/db.js"

export default {
    async getAllProducts() {
        const result = await pool.query(
            `
            SELECT 
                p.id,
                p.title,
                p.price,
                p.image,
                c.name AS category
            FROM 
                products AS p
            JOIN
                categories AS c
            ON
                p.category = c.id;
            `
        );

        return result.rows;
    },

    async getSpecificProduct(productId) {
        const result = await pool.query(
            `
            SELECT *
            FROM
                products
            WHERE
                id = $1;
            `,
            [productId]
        );

        return result.rows[0];
    },

    async addNewProduct(productData) {
        const {title, description, price, category, image} = productData;

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
        const {title, description, price, category_id, image} = newProductData;

        const result = await pool.query(
            `
            UPDATE 
                products
            SET
                title = $1,
                description = $2,
                price = $3,
                category_id = $4
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