const catchAsync = require('../middlewares/catchAsync');
const Event =require('../models/event');
const Shop =require('../models/shop');
const Product = require("../models/product")
const ErrorHandler =require('../utilis/errorHandler');
const APPIFEATURES = require('../utilis/appiFeatures');
const User = require('../models/user');
const cloudinary =require('../helpers/cloudinary')

exports.createEvent =catchAsync(async(req,res,next)=>{

    
const shop = await Shop.findById(req.body.shop);
let product = await Product.findOne(req.body.shop) 


if(!shop){
    return next( new ErrorHandler('Não existe nenhuma loja com este ID',404))
}




let images = [];

        if (typeof req.body.imageCover === "string") {
          images.push(req.body.imageCover);
        } else {
          images = req.body.imageCover;
        }


        let imagesLinks=[]
         for (let i = 0; i < images.length; i++) {
       
                   
                   const result = await cloudinary.uploader.upload(images[i],{folder: 'Mercado-Online/events'})
             .catch((error) => {
                 console.log(error);
             })

               
            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
              })

            }
                   

        const productData = req.body;
       productData.imageCover = imagesLinks;
   
        const event = await Event.create(productData);

         product.discountPrice = req.body.discountPrice;
         product.save();

        res.status(201).json({
            status:"success",
            event
        })


})


exports.getAllEvents = catchAsync(async(req,res,next)=>{

    const features = new APPIFEATURES(Event.find(),req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()


    const events = await features.query

    res.status(200).json({
        status:"success",
        resultats:events.length,
        events
    })
})


exports.getEvent = catchAsync(async(req,res,next)=>{



    const events = await Event.findOne({shop:req.params.id});
    if(!events){
        return next (new ErrorHandler("Não existe nenhuma loja com este ID",404))
    }

    res.status(200).json({
        status:"success",
        resultats:events.length,
        events

    })
})

exports.getMyEvents = catchAsync(async(req,res,next)=>{
    const events = await Event.find({user:req.user._id})
    res.status(200).json({
        status:"success",
        resultats:events.length,
        events

    })
})

exports.deleteEvent = catchAsync(async(req,res,next)=>{

    const event = await Event.findByIdAndDelete(req.params.id)
    if(!event){
        return next (new ErrorHandler("Não existe nenhuma loja com este ID",404))
    }

    res.status(204).json({
        status:"success",
        events:null

    })


})