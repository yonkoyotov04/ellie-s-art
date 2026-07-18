import pool from "../database/db.js"

export default {
    async getAllProducts() {
        const result = await pool.query(
            `
            SELECT * FROM products;
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
        const {title, description, price, category} = productData;

        const result = await pool.query(
            `
            INSERT INTO
                products(title, description, price, category)
            VALUES
                ($1, $2, $3, $4)
            RETURNING *;
            `,
            [title, description, price, category]
        );

        return result.rows[0];
    },

    async editProduct(productId, newProductData) {
        const {title, description, price, category} = newProductData;

        const result = await pool.query(
            `
            UPDATE 
                products
            SET
                title = $1,
                description = $2,
                price = $3,
                category = $4
            WHERE
                id = $5
            RETURNING *;
            `,
            [title, description, price, category, productId]
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
    }
}