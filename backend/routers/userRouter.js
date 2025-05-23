const express = require('express');
const authcontroller=require('../controllers/authController');
const userController=require('../controllers/userController')







const router = express.Router();

router.post('/register', authcontroller.register)
router.post('/login', authcontroller.loginUser)
router.get('/logout',authcontroller.logout);
router.get('/auth', authcontroller.isAuth)

router.get('/getUser/:id',authcontroller.protect, authcontroller.restrictTo("Admin"),userController.getUser);
router.get('/getMe',authcontroller.protect, userController.getMe, userController.getUser);
router.get('/getAllUsers',authcontroller.protect, authcontroller.restrictTo('Admin'), userController.getAllUsers)
router.delete('/deleteMe',authcontroller.protect,authcontroller.restrictTo("user"),userController.deleteMe);
router.patch('/updateMe',authcontroller.protect, userController.getMe, userController.updateMe);
router.patch('/updateMyPassword',authcontroller.protect, authcontroller.updateMyPassword);
router.patch('/updateMyAddress' ,authcontroller.protect,  userController.updateMyAdress);
router.patch('/updateMyphoto',authcontroller.protect, userController.updateMyPhoto);
router.patch('/updateRole',authcontroller.protect,authcontroller.restrictTo('Admin'), userController.updateRole);
router.delete('/deleteUser/:id',authcontroller.protect, authcontroller.restrictTo('Admin'), userController.deleteUser);





module.exports= router;