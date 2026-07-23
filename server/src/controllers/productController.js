import { Router } from "express"
import productService from "../services/productService.js";
import { getErrorMessage } from "../utils/errorUtil.js";
import { authMiddleware, isAuth }  from "../middlewares/authMiddleware.js";

const productController = Router();

productController.get('/', async (req, res) => {
    const products = await productService.getAllProducts();

    res.status(200).json(products ?? []);
});

productController.get('/:productId', async (req, res) => {
    const productId = req.params.productId;

    const product = await productService.getSpecificProduct(productId);

    res.status(200).json(product ?? {});
});

productController.post('/', isAuth, async (req, res) => {
    const productData = req.body;

    productData['title'] = productData.title.trim();
    productData['description'] = productData.description.trim();
    productData['price'] = productData.price.trim();
    productData['category'] = productData.category.trim();

    try {
        const product = await productService.addNewProduct(productData);
        res.status(200).json(product ?? {});
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).json({message: errorMessage});
    }
});

productController.put('/:productId', isAuth, async (req, res) => {
    const productId = req.params.productId;
    const newProductData = req.body;

    newProductData['title'] = newProductData.title.trim();
    newProductData['description'] = newProductData.description.trim();
    newProductData['price'] = newProductData.price.trim();
    newProductData['category'] = newProductData.category.trim();

    try {
        const updatedProduct = await productService.editProduct(productId, newProductData);
        res.status(200).json(updatedProduct ?? {});
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).json({message: errorMessage});
    }
});

productController.delete('/:productId', isAuth, async (req, res) => {
    const productId = req.params.productId;

    try {
        const deletedProduct = await productService.deleteProduct(productId);
        res.status(200).json(deletedProduct ?? {});
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).json({message: errorMessage});
    }
});

export default productController;