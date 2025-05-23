const catchAsync = require("../middlewares/catchAsync");
const ErrorHandler =  require("../utilis/errorHandler");
const jwt = require('jsonwebtoken');
const Shop = require("../models/shop");
const APIFeatures = require("../utilis/appiFeatures");
const authController = require('../controllers/authController')
const {promisify} =require('util');




exports.restrictTo =(...roles)=>{
    
    return(req,res,next)=>{
        
        if(!roles.includes(req.shop.role)){
            return next(new ErrorHandler("Caro usúario, não tem permissão para essa ação",403));
            
        }
       

        next();
    }
}



exports.createShop =catchAsync(async(req,res,next)=>

    
    { 
        const shop = await Shop.create({
           
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            description:req.body.description,
            phoneNumber: req.body.phoneNumber,
            userId:req.user._id
    
        })
    
        authController.createSendToken(shop,201,res);
    
        
    
    });
//shop getMe 

exports.getMe =catchAsync(async (req, res, next) => {
      
       req.params.id=req.user._id;
       next();
});

exports.getMyShops = catchAsync(async(req,res,next)=>{
    const userId = req.user._id;

    const shop = await Shop.find({userId});
    if(!shop){
        return next (new ErrorHandler("Caro vendedor, vc não tem nenhuma loja criada",404))
    }

    res.status(200).json({
        status:"success",
        results:shop.length,
        shop
    }

    )
})


// usuario get Shop info
exports.getInfoShop = catchAsync(async(req,res,next)=>{

    const shop = await Shop.findById(req.params.id).populate({path:"userId"});
    if(!shop){
        return next(new ErrorHandler('Não existe nenhuma loja com esse ID', 404))
    }

    res.status(200).json({
        status:'success',
        shop
    })
});


//admins getall shops and user
exports.getAllShops = catchAsync(async(req,res,next)=>{
    const features = new APIFeatures(Shop.find(),req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();


    const shops = await features.query;
    res.status(200).json({
        status:'success',
        results:shops.length,
        shops
    })


})


exports.updateStatus = catchAsync(async(req,res,next)=>{

    const shop = await Shop.findById(req.params.id)

    if(shop.status === "Processando"){
        shop.status = "Confirmado"
    }

    if(shop.status === "Confirmado"){
        shop.status = "Verificado"
    }

    shop.save();

    res.status(200).json({
        status:"success",
        shop

    })


})

//admin delete shop
exports.deleteShop = catchAsync(async(req,res,next)=>{
    const shop = await Shop.findByIdAndDelete(req.params.id);

    if(!shop){
        return next ( new ErrorHandler('Não existe nenhuma loja com este ID', 404));

    }

    res.status(204).json({
        status:'success',
        shop:null

    })
});


// shop delete method of widraw
exports.updatemethodWidraw = catchAsync (async(req,res,next)=>{
    const {withdrawMethod} = req.body
    const shop = await Shop.findByIdAndUpdate(req.params.id,withdrawMethod);

    res.status(200).json({
        status:"success",
        shop
    })
    

})

exports.updateImageShop = catchAsync(async(req,res,next)=>{

    const shop = await Shop.findById(req.params.id);
    shop.withdrawMethod = null,
    await shop.save();

    res.status(200).json({
        status:"success",
        shop
    })

})


exports.deleteMethodWithdraw =catchAsync(async(req,res,next)=>{
    console.log("coman")
})

//shop update me 

exports.updateMe =catchAsync(async(req,res,next)=>{

    const shop = await Shop.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    
    });


    res.status(200).json({
        status:"success",
        shop
    })


})



exports.deleteMe = catchAsync(async (req,res,next)=>{
    await Shop.findByIdAndDelete(req.params.id,{active:false})
    res.status(200).json({
        status:"success",
        shop:null
    })

});











