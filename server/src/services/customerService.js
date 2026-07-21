import pool from "../database/db.js";
import errorApi from "../utils/errorUtil.js";
import bcrypt from 'bcrypt';
import { generateAuthToken, generateRefreshToken } from "../utils/tokenUtils.js";

export default {
    async register(customerData) {
        const {firstName, lastName, email, password, rePassword, phone} = customerData;

        const customerExists = await pool.query(
            ` 
            SELECT
                *
            FROM
                customers
            WHERE
                email = $1;
            `,
            [email]
        );

        if (!customerExists.rows.length > 0) {
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

        password = await bcrypt.hash(password, 12);

        const customer = await pool.query(
            `
            INSERT INTO
                customers(first_name, last_name, email, password, phone)
            VALUES
                ($1, $2, $3, $4, $5)
            RETURNING *;
            `,
            [firstName, lastName, email, password, phone]
        );

        const token = generateAuthToken(customer);
        const refreshToken = generateRefreshToken(customer);

        return {
            customer: {
                ...customer.rows[0],
                accessToken: token
            },
            refreshToken
        }
    },

    async login(email, password) {
        const customer = await pool.query(
            `
            SELECT 
                *
            FROM
                customers
            WHERE
                email = $1;
            `,
            [email]
        )

        if (!customer.rows.length > 0) {
            throw new errorApi(
                401,
                'This customer does not exist'
            )
        }

        const customerPassword = await pool.query(
            `
            SELECT
                password
            FROM
                customers
            WHERE
                email = $1;
            `,
            [email]
        );

        const isValidPassword = bcrypt.compare(password, customerPassword);

        if (!isValidPassword) {
            throw new errorApi(
                401,
                'Incorrect password!'
            )
        }

        const token = generateAuthToken(customer);
        const refreshToken = generateRefreshToken(customer);

        return {
            customer: {
                ...customer.rows[0],
                accessToken: token
            },
            refreshToken
        }
    },

    async getCustomerData(customerId) {
        const result = await pool.query(
            `
            SELECT 
                CONCAT_WS(' ', first_name, last_name) AS full_name,
                email,
                phone
            FROM
                customers
            WHERE
                id = $1;
            `,
            [customerId]
        );

        return result.rows[0];
    },

    async editProile(customerId, newData) {
        const {firstName, lastName, email, phone} = newData;

        const result = await pool.query(
            `
            UPDATE
                customers
            SET
                first_name = $1,
                last_name = $2,
                email = $3,
                phone = $4
            WHERE
                id = $6;
            RETURNING *;
            `,
            [firstName, lastName, email, phone, customerId]
        );

        return result.rows[0];
    },

    async changePassword(customerId, currentPassword, newPassword, repeatNewPassword) {
        const customerPassword = await pool.query(
            `
            SELECT
                password
            FROM
                customers
            WHERE
                id = $1;
            `,
            [customerId]
        );

        const isPasswordCorrect = await bcrypt.compare(currentPassword, customerPassword);

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
                customers
            SET
                password = $1
            WHERE
                id = $2;
            `,
            [newPassword, customerId]
        );
    },

    async deleteProfile(customerId) {
        const result = await pool.query(
            `
            DELETE FROM
                customers
            WHERE
                id = $1
            RETURNING *;
            `,
            [customerId]
        );

        return deletedProfile.rows[0];
    }
}