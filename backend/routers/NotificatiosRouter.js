const express = require('express');
const authController = require('../controllers/authController');
const notificationController= require('../controllers/notificationController')


const router = express.Router();



router.post("/sendNotificaction", authController.protect, authController.restrictTo("Admin"), notificationController.sendNotification )
router.get("/getAllnotificationsUser", authController.protect, notificationController.getAllNotificationsUser )


module.exports= router;