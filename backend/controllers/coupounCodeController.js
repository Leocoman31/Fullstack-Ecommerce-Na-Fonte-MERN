const catchAsync = require("../middlewares/catchAsync");
const CoupounCode = require("../models/couponCode");
const Shop = require("../models/shop");
const ErrorHandler = require("../utilis/errorHandler");



exports.createCoupounCode = catchAsync(async(req,res,next)=>{
    const isCoupounCodeExist = await CoupounCode.find({name: req.body.name});
    if(isCoupounCodeExist.length !== 0){
        return next (new ErrorHandler("Já existe um code coupoun ",400))

    }


    const couponCode = await CoupounCode.create(req.body);

    res.status(201).json({
        status:"success",
        couponCode
    })
})


// get all shop coupoun 
exports.getAllCoupounCode = catchAsync(async(req,res,next)=>{

    const couponCode = await CoupounCode.find({shopId:req.shop._id});
    res.status(200).json({
        status:"success",
        results: couponCode.length,
        couponCode
        
    })

})


// delete coupon shop
exports.deleteCoupounCode = catchAsync(async(req,res,next)=>{

    const couponCode = await CoupounCode.findById(req.params.id);
    if(!couponCode){
        return next (new ErrorHandler("Este Codigo Coupoun não existe",404));}

    res.status(204).json({
        status:"success",
        couponCode:null
    })
})


exports.getCoupound =catchAsync(async(req,res,next)=>{
    const couponCode = await CoupounCode.findOne({name:req.params.name})

    res.status(200).json({
        success: 'success',
        couponCode,

})
})