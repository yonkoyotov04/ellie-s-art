import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, '..', 'uploads');
fs.mkdirSync(__dirname, {recursive: true});

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueName = `${Date.now()} - ${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniqueName}${ext}`)
    }
});

const fileFilter = (req, file, cb) => {
    const allowed = ['image/png', 'image/jpeg'];

    if (!allowed.includes(file.mimetype)) {
        return cb(new Error('Only png and jpeg images are allowed'));
    }

    cb(null, true);
}

const upload = multer({
    storage,
    fileFilter,
    limits: {fileSize: 5 * 1024 * 1024}
})

export default upload;