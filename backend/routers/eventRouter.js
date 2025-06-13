const express = require('express');
const authController = require('../controllers/authController');
const shopController = require('../controllers/shopController');
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController')



const router = express.Router();


router.post('/createEvent', authController.protect, authController.restrictTo("Seller"),eventController.createEvent);
router.get('/myEvents',  authController.protect, authController.restrictTo("Seller"),eventController.getMyEvents);
router.get('/getAllEvents', eventController.getAllEvents );
router.get('/getEvent/:id', eventController.getEvent)
router.get('/detailEventAdmin/:id',  authController.protect, authController.restrictTo("Admin"),eventController.getEventAdmin)
router.delete('/deleteEvent/:id',authController.protect, authController.restrictTo("Seller"), eventController.deleteEvent )




module.exports =router;