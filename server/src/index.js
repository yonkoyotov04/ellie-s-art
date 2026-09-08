import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import authMiddleware from './middlewares/authMiddleware.js';
import errorApi, { getErrorMessage } from './utils/errorUtil.js';
import { json } from 'stream/consumers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
    origin: 'http://localhost:3002',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

app.use(authMiddleware);

app.use(routes);

app.use((error, req, res, next) => {
    console.error(error);

    res.status(error.status || 500).json({
        message: getErrorMessage(error)
    })
})

app.use((err, req, res, next) => {
    console.error(err);

    if (err instanceof errorApi) {
        return res.status(err.status).json({message: err.message});
    }

    return res.status(500).json({message: 'Something went wrong! Try again!'})
    
})

app.listen(2105, '0.0.0.0', () => console.log('Server is listening on port http://localhost:2105.....'));