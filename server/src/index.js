import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes.js';
import dotenv from "dotenv"
import authMiddleware from './middlewares/authMiddleware.js';

dotenv.config();

const app = express();

app.use(cors);

app.use(express.json());
app.use(cookieParser());

app.use(authMiddleware);

app.use(routes);

app.listen(2105, '0.0.0.0', () => console.log('Server is listening on port http://localhost:2105.....'));