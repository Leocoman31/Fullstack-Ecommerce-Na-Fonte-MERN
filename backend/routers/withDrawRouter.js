const express = require('express');
const withDrawController = require('../controllers/withdrawController')
const shopController = require('../controllers/shopController');
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')



const router = express.Router();

router.patch('/updateStatusWithdraw', authController.protect, authController.restrictTo('Admin'), withDrawController.updateStatusRequestWithdraw );
router.get('/getAllWithdraw', authController.protect, authController.restrictTo('Admin'), withDrawController.getAllWithdraws );

router.post('/requestWithdraw',authController.protect, authController.restrictTo("Seller"), withDrawController.createRequestWidran);





module.exports =router;