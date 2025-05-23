const express = require("express");
const paymentcontroller = require('../controllers/payment')


const router = express.Router();

router.post('/processPayment', paymentcontroller.processPayment)




module.exports = router ;