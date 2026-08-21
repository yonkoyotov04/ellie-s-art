import pool from "../database/db.js";
import errorApi from "../utils/errorUtil.js";
import bcrypt from 'bcrypt';
import { generateAuthToken, generateRefreshToken } from "../utils/tokenUtils.js";

export default {
    async register(adminData) {
        const { firstName, lastName, email, password, rePassword } = adminData;

        const adminExists = await pool.query(
            ` 
            SELECT
                *
            FROM
                admins
            WHERE
                email = $1;
            `,
            [email]
        );

        if (adminExists.rows.length > 0) {
            throw new errorApi(
                409,
                'This email is already registered!'
            )
        }

        if (password !== rePassword) {
            throw new errorApi(
                401,
                'Password mismatch!'
            )
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const admin = await pool.query(
            `
            INSERT INTO
                admins(first_name, last_name, email, password)
            VALUES
                ($1, $2, $3, $4)
            RETURNING *;
            `,
            [firstName, lastName, email, hashedPassword]
        );

        const token = generateAuthToken(admin.rows[0]);
        const refreshToken = generateRefreshToken(admin.rows[0]);

        return {
            admin: {
                ...admin.rows[0],
                accessToken: token
            },
            refreshToken
        }
    },

    async login(email, password) {
        const admin = await pool.query(
            `
            SELECT 
                *
            FROM
                admins
            WHERE
                email = $1;
            `,
            [email]
        )

        if (!admin.rows.length > 0) {
            throw new errorApi(
                401,
                'This admin does not exist'
            )
        }

        const adminPassword = await pool.query(
            `
            SELECT
                password
            FROM
                admins
            WHERE
                email = $1;
            `,
            [email]
        );

        const isValidPassword = bcrypt.compare(password, adminPassword.rows[0].password);

        if (!isValidPassword) {
            throw new errorApi(
                401,
                'Incorrect password!'
            )
        }

        const token = generateAuthToken(admin);
        const refreshToken = generateRefreshToken(admin);

        return {
            admin: {
                ...admin.rows[0],
                accessToken: token
            },
            refreshToken
        }
    },

    async getAdminData(adminId) {
        const result = await pool.query(
            `
            SELECT 
                CONCAT_WS(' ', first_name, last_name) AS full_name,
                email,
                phone
            FROM
                admins
            WHERE
                id = $1;
            `,
            [adminId]
        );

        return result.rows[0];
    },

    async editProile(adminId, newData) {
        const { firstName, lastName, email } = newData;

        const result = await pool.query(
            `
            UPDATE
                admins
            SET
                first_name = $1,
                last_name = $2,
                email = $3,
            WHERE
                id = $6;
            RETURNING *;
            `,
            [firstName, lastName, email, phone, adminId]
        );

        return result.rows[0];
    },

    async changePassword(adminId, currentPassword, newPassword, repeatNewPassword) {
        const adminPassword = await pool.query(
            `
            SELECT
                password
            FROM
                admins
            WHERE
                id = $1;
            `,
            [adminId]
        );

        const isPasswordCorrect = await bcrypt.compare(currentPassword, adminPassword);

        if (!isPasswordCorrect) {
            throw new errorApi(
                401,
                'Incorrect password!'
            )
        }

        if (newPassword !== repeatNewPassword) {
            throw new errorApi(
                401,
                'Password mismatch!'
            )
        }

        newPassword = await bcrypt.hash(newPassword, 12);

        return await pool.query(
            `
            UPDATE
                admins
            SET
                password = $1
            WHERE
                id = $2;
            `,
            [newPassword, adminId]
        );
    },

    async deleteProfile(adminId) {
        const result = await pool.query(
            `
            DELETE FROM
                admins
            WHERE
                id = $1
            RETURNING *;
            `,
            [adminId]
        );

        return result;
    }
}