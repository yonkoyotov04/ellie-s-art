import { Router } from "express"
import productService from "../services/productService.js";
import errorApi, { getErrorMessage } from "../utils/errorUtil.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import upload, { uploadDir } from "../middlewares/upload.js";
import path from "path";
import fs from 'fs'

const productController = Router();

productController.get('/', async (req, res) => {
    const filter = req.query;
    let products = [];

    try {
        products = await productService.getAllProducts(filter);
    } catch (error) {
        throw new errorApi(400, 'Failed to fetch products!')
    }

    res.status(200).json(products ?? []);
});

productController.get('/categories', async (req, res) => {

    try {
        const categories = await productService.getCategories();
        res.status(200).json(categories ?? []);
    } catch (error) {
        throw new errorApi(400, 'Failed to fetch categories!');
    }
})

productController.get('/count', async (req, res) => {
    try {
        const count = await productService.getCount();
        res.status(200).json(count);
    } catch (error) {
        throw new errorApi(400, 'Failed to fetch product count!');
    }
})

productController.get('/:productId', async (req, res) => {
    const productId = req.params.productId;
    let product = {};

    try {
        const result = await productService.getSpecificProduct(productId);

        product = {
            category: {
                id: result.cateegory_id,
                name: result.category
            },
            ...result
        }
    } catch (error) {
        throw new errorApi(400, 'Failed to fetch product!');
    }

    res.status(200).json(product ?? {});
});

productController.post('/', isAuth, upload.single('image'), async (req, res) => {
    const productData = req.body;

    if (!isNaN(Number(productData.category)) && productData.category.trim() !== '') {
        productData['category'] = Number(productData.category);
    } else {
        productData['category'] = productData.category.trim();
        const checkExistance = await productService.checkCategory(productData.category);

        if (!checkExistance.length > 0) {
            const newCategory = await productService.addNewCategory(productData.category);

            productData['category'] = Number(newCategory.id);
        } else {
            productData['category'] = checkExistance[0].id;
        }

    }

    if (!req.file) {
        throw new errorApi(400, 'A product image is required!');
    }

    productData['title'] = productData.title.trim();
    productData['description'] = productData.description?.trim() ?? '';
    productData['price'] = productData.price.trim();
    productData['image'] = `uploads/${req.file.filename}`

    try {
        const product = await productService.addNewProduct(productData);
        res.status(200).json(product ?? {});
    } catch (error) {
        throw new errorApi(400, 'Failed to upload the new product!');
    }
});

productController.put('/:productId', isAuth, upload.single('image'), async (req, res) => {
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
       throw new errorApi(400, 'Failed to edit product!');
    }
});

productController.put('/:productId/click', async (req, res) => {
    const productId = req.params.productId;

    const result = await productService.addAClick(productId);

    res.status(200).json(result ?? {});
})

productController.delete('/:productId', isAuth, async (req, res) => {
    const productId = req.params.productId;

    try {
        const deletedProduct = await productService.deleteProduct(productId);

        if (!deletedProduct) {
            throw new errorApi(404, 'Product not found!')
        }

        if (deletedProduct.image) {
            const imagePath = path.join(uploadDir, deletedProduct.image);
            console.log(imagePath);
            fs.unlink(imagePath, (err) => {
                throw new errorApi(400, 'Image deletion failed!');
            })
        }

        res.status(200).json(deletedProduct ?? {});
    } catch (error) {
       throw new errorApi(400, 'Failed to delete product!');
    }
});

export default productController;