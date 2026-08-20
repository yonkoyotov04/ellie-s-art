import { Router } from "express";
import productController from "./controllers/productController.js";
import adminController from "./controllers/adminController.js";

const routes = Router();

routes.use('/admin', adminController);
routes.use('/products', productController);

export default routes;