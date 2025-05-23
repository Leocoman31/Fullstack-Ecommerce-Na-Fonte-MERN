const express = require('express');
const shopController =require('../controllers/shopController');
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

const router = express.Router();


router.post('/createShop',authController.protect, authController.restrictTo("Seller"), shopController.createShop);



router.get('/getInfoShop/:id', shopController.getInfoShop);
router.get('/getAllShops', shopController.getAllShops);
router.get('/getMyShops', authController.protect, authController.restrictTo("Seller"), shopController.getMyShops);
router.get('/getMe', authController.protect,shopController.getMe);
router.delete('/deleteShop/:id',authController.protect, authController.restrictTo("Admin"), shopController.deleteShop);
router.patch('/updateMe',authController.protect,shopController.getMe, shopController.updateMe)
router.patch('/updateStatus/:id',authController.protect,authController.restrictTo("Admin"), shopController.updateStatus)
router.delete('/deleteMe',authController.protect,shopController.getMe, shopController.deleteMe)
router.patch('/updateMethodWidraw',authController.protect,shopController.getMe, shopController.updatemethodWidraw)
router.delete('/deleteMethodWidraw',authController.protect,shopController.getMe, shopController.deleteMethodWithdraw)

module.exports = router;