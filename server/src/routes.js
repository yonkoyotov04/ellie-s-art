import { Router } from "express";
import productController from "./controllers/productController.js";
import orderController from "./controllers/orderController.js";
import customerController from "./controllers/customerController.js";

const routes = Router();

routes.use('/customers', customerController);
routes.use('/products', productController);
routes.use('/orders', orderController);

export default routes;