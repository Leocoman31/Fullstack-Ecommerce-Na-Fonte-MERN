const express = require('express');
const shopController = require('../controllers/shopController')
const authController = require('../controllers/authController')
const coupondController = require('../controllers/coupounCodeController')



const router = express.Router();


router.post('/createCoupond', authController.protect,authController.restrictTo('Seller'),coupondController.createCoupounCode);
router.get('/getAllMyCouponds', authController.protect,authController.restrictTo('Seller'),coupondController.getAllCoupounCode);
router.get('/getCoupond/:name',authController.protect,authController.restrictTo('Seller'),coupondController.getCoupound);
router.delete('/deleteCoupond',authController.protect,authController.restrictTo('Seller'), coupondController.deleteCoupounCode)


module.exports =router;