const express = require('express');
const productController= require('../controllers/productController')
const authController = require('../controllers/authController');
const shopController = require('../controllers/shopController')
const reviewRouter = require('../routers/reviewRouter')


const router = express.Router();
router.use('/:productId/reviews',reviewRouter);

router.get('/getAllProducts',productController.getAllProducts);
router.get("/:keyword", productController.searchProducts);
router.get('/productDetails/:id', productController.getProduct);
router.get('/specialofer', productController.aliasSpecialProduct,productController.getAllProducts);
router.get('/relateProducts/:id', productController.getReleteProducts);
router.get('/productsWithSameName/:id', productController.getProductsWthSameName);

router.post('/addProduct', authController.protect,authController.restrictTo("Seller"),productController.AddProduct);
router.get('/getAllProductsSeller', authController.protect,authController.restrictTo("Seller"), productController.getAllProductsSeller);
router.get('/getAllProductsshop', authController.protect,authController.restrictTo("Seller"), productController.getAllproductsShop);
router.patch('/updateProduct/:id',authController.protect,authController.restrictTo("Seller"),productController.updateProduct);
router.delete('/deleteProduct/:id',authController.protect,authController.restrictTo("Seller"),productController.deleteProduct);



module.exports= router;