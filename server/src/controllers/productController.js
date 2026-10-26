import { Router } from "express"
import productService from "../services/productService.js";
import errorApi from "../utils/errorUtil.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import upload, { uploadDir } from "../middlewares/upload.js";
import path from "path";
import fs from 'fs';
import fsPromises from 'fs/promises';

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
                id: result.category_id,
                name: result.category
            },
            ...result
        }
    } catch (error) {
        throw new errorApi(400, 'Failed to fetch product!');
    }

    res.status(200).json(product ?? {});
});

productController.post('/', isAuth, upload.array('images', 8), async (req, res) => {
    const productData = req.body;

    if (productData.category.trim() === '') {
        throw new errorApi(400, 'A category is required!')
    }

    if (!isNaN(Number(productData.category))) {
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

    if (!req.files?.length) {
        throw new errorApi(400, 'At least one product image is required!');
    }

    try {
        productData['title'] = productData.title.trim();
        productData['description'] = productData.description?.trim() ?? '';
        productData['price'] = productData.price.trim();
        productData['images'] = req.files.map(file => `${file.filename}`)
        productData['image'] = productData.images[0];

        const product = await productService.addNewProduct(productData);
        res.status(200).json(product ?? {});
    } catch (error) {
        req.files.forEach(file => fs.unlink(file.path, () => { }))
        throw new errorApi(400, 'Failed to upload the new product!');
    }
});

productController.put('/:productId', isAuth, upload.array('newImages', 8), async (req, res) => {
    const productId = req.params.productId;
    const newProductData = req.body;

    let keptImages = [].concat(req.body.existingImages || []).filter(Boolean);
    let newImages = (req.files || []).map(file => file.filename);

    newProductData['title'] = newProductData.title.trim();
    newProductData['description'] = newProductData.description.trim();
    newProductData['price'] = newProductData.price.trim();
    newProductData['category_id'] = newProductData.category_id.trim();

    try {
        const { updatedProduct, removedPaths } = await productService.editProduct(productId, newProductData, keptImages, newImages);

        removedPaths.forEach(p => fs.unlink(path.join(uploadDir, p), () => { }));

        res.status(200).json(updatedProduct ?? {});
    } catch (error) {
        (req.files || []).forEach(file => fs.unlink(file.path, () => { }));
        throw new errorApi(400, 'Failed to edit product!');
    }
});

productController.put('/:productId/click', async (req, res) => {
    const productId = req.params.productId;

    const result = await productService.addAClick(productId);

    res.status(200).json(result ?? {});
});

productController.put('/:productId/activate', async (req, res) => {
    const productId = req.params.productId;
    const result = await productService.activateProduct(productId);

    res.status(200).json(result ?? {});
})

productController.put('/:productId/deactivate', async (req, res) => {
    const productId = req.params.productId;
    const result = await productService.deactivateProduct(productId);

    res.status(200).json(result ?? {});
})

productController.delete('/:productId', isAuth, async (req, res) => {
    const productId = req.params.productId;

    try {
        const productImages = await productService.getProductImages(productId);
        const deletedProduct = await productService.deleteProduct(productId);

        if (!deletedProduct) {
            throw new errorApi(404, 'Product not found!')
        }

        if (productImages?.length) {
            for (const image of productImages) {
                const imagePath = path.join(uploadDir, image.path);

                try {
                    await fsPromises.unlink(imagePath);
                } catch (error) {
                    throw new errorApi(400, 'Image deletion failed!');
                }
            }

        }

        res.status(200).json(deletedProduct ?? {});
    } catch (error) {
        throw new errorApi(400, 'Failed to delete product!');
    }
});

export default productController;