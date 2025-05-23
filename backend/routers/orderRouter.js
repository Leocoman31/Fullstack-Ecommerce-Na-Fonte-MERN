const express = require('express');
const userController =require('../controllers/userController');
const authController =require('../controllers/authController');
const orderController=require('../controllers/orderController');
const shopController = require('../controllers/shopController')



const router = express.Router();


router.post('/createOrder',authController.protect, authController.restrictTo('user'), orderController.createOrder);
router.get('/myOrders', authController.protect, authController.restrictTo('user'), orderController.getMyOrders);
router.get('/getAllOrders', authController.protect, authController.restrictTo('Admin'), orderController.getAllOrders);
router.get('/getShopOrders', authController.protect, authController.restrictTo('shop'), orderController.getShopOrders);
router.patch('/updateStatusOrder/:id',authController.protect,authController.restrictTo('Admin'), orderController.updateStatusOrder);
router.delete('/deleteOrder/:id',authController.protect, authController.restrictTo('Admin'), orderController.deleteOrder);
router.get('/getOrder:/id',authController.protect, authController.restrictTo('user,Admin'))




module.exports =router;