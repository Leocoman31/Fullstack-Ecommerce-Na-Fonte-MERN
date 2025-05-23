const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController')


const router = express.Router({mergeParams:true});

router.post('/addReview', authController.protect, authController.restrictTo("user"),reviewController.addReview)
router.get('/getReview/:id',reviewController.getReview)
router.get('/getAllReview',reviewController.getAllReviews );
router.delete('/deleteReview/:id',authController.protect, authController.restrictTo('user'),reviewController.deleteReview)
router.patch('/updateReview/:id',authController.protect, authController.restrictTo('user'),reviewController.updateReview);




module.exports= router;