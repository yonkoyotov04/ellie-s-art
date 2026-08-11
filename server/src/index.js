import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes.js';
import 'dotenv/config';
import authMiddleware from './middlewares/authMiddleware.js';
import { getErrorMessage } from './utils/errorUtil.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use(authMiddleware);

app.use(routes);

app.use((error, req, res, next) => {
    console.error(error);

    res.status(error.status || 500).json({
        message: getErrorMessage(error)
    })
})

app.listen(2105, '0.0.0.0', () => console.log('Server is listening on port http://localhost:2105.....'));