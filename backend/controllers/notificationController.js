const catchAsync = require('../middlewares/catchAsync')
const Notification = require('../models/notifications')
const ErrorHandler =require('../utilis/errorHandler');
const APIFeatures = require('../utilis/appiFeatures');






exports.sendNotification = catchAsync(async(req,res,next)=>{

 
    const notification = await Notification.create({
        message:req.body.message,
        type:req.body.type,
        receiver:req.body.id
    });


    res.status(201).json({
        status:"success",
        message:"Notificação enviada com sucesso"

    })


})


exports.getAllNotificationsUser = catchAsync(async(req,res,next)=>{


    const features = new APIFeatures(Notification.find({receiver:req.user._id}),req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()

    console


    const notification = await features.query;

    res.status(200).json({
        status:"success",
        notification

    })
})


