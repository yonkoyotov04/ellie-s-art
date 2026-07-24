import { Router } from "express";
import orderService from "../services/orderService.js";
import { getErrorMessage } from "../utils/errorUtil.js";
import { isAuth } from "../middlewares/authMiddleware.js";


const orderController = Router();

orderController.get('/confirmed', isAuth, async (req, res) => {
    const completedOrders = await orderService.getAllConfirmedOrders();

    res.status(200).json(completedOrders ?? []);
});

orderController.get('/:orderId', isAuth, async (req, res) => {
    const orderId = req.params.orderId;

    const order = await orderService.getOrder(orderId);

    res.status(200).json(order ?? {});
});

orderController.get('/:customerId', isAuth, async (req, res) => {
    const customerId = req.params.customerId;

    const customerOrders = await orderService.getAllOrdersOfCustomer(customerId);

    res.status(200).json(customerOrders ?? []);
});

orderController.post('/:productId/:customerId/add', isAuth, async (req, res) => {
    const productId = req.params.productId;
    const customerId = req.params.customerId;

    const quantity = req.body.quantity;

    try {
        const addedProduct = await orderService.addProductToCart(customerId, productId, quantity);

        res.status(200).end();
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).json({message: errorMessage});
    }
});

orderController.put('/:orderId/confirm', isAuth, async (req, res) => {
    const orderId = req.params.orderId;

    try {
        await orderService.finalizeOrder(orderId);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).json({message: errorMessage});
    }
});

orderController.put('/:orderId/cancel', isAuth, async (req, res) => {
    const orderId = req.params.orderId;

    try {
        await orderService.cancelOrder(orderId);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).json({message: errorMessage});
    }
})

orderController.delete('/:orderId/:productId', isAuth, async (req, res) => {
    const orderId = req.params.orderId;
    const productId = req.params.productId;

    try {
        const removedProduct = await orderService.removeProductFromCart(orderId, productId);

        res.status(200).end();
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).json({message: errorMessage});
    }
});

orderController.delete('/:orderId', isAuth, async (req, res) => {
    const orderId = req.params.orderId;

    try {
        const removedProducts = await orderService.removeEverythingFromCart(orderId);

        res.status(200).end();
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).json({message: errorMessage});
    }
});

export default orderController;