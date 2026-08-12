import jwt from 'jsonwebtoken'
import 'dotenv/config'

export function generateAuthToken(customer) {
    const payload = {
        id: customer.id,
        email: customer.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });

    return token;
}

export function generateRefreshToken(customer) {
    const payload = {
        id: customer.id,
        email: customer.email
    };

    const refreshToken = jwt.sign(payload, process.env.REFRESH_JWT_SECRET, { expiresIn: '14d' });

    return refreshToken;
}