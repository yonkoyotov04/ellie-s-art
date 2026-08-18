import pool from "../database/db.js"

export default {
    async getAllPosts() {
        await pool.query(
            `
                SELECT
                    *
                FROM
                    posts
                ORDER BY id
            `
        )
    }
}