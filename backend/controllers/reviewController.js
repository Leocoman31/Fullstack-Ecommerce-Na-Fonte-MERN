const Review = require('../models/review')
const catchAsync = require('../middlewares/catchAsync');
const ErrorHandler =require('../middlewares/errorMiddleware');
const APIFeatures = require('../utilis/appiFeatures');
const cloudinary = require('../helpers/cloudinary')


exports.setProductUserIds =(req,res,next)=>{
    if(!req.body.product) req.body.product = req.params.productId;
    if(!req.body.user) req.body.user=req.user._id;

  
    next();

}
exports.addReview = catchAsync(async(req,res,next)=>{

    let images = [];
      
              if (typeof req.body.imagesReviews === "string") {
                images.push(req.body.imagesReviews);
              } else {
                images = req.body.imagesReviews;
              }
    
            
           
              const imagesLinks = [];
            
              for (let i = 0; i < images.length; i++) {
    
                
                const result = await cloudinary.uploader.upload(images[i],{folder: 'Mercado-Online/products/reviews'})
          .catch((error) => {
              console.log(error);
          })
                
               
                imagesLinks.push({
                  public_id: result.public_id,
                  url: result.secure_url,
                })
              }
            
              const reviewData = req.body;
              reviewData.imagesReviews = imagesLinks;


    const review = await Review.create(reviewData)
    
    

    res.status(201).json({
        status:"success",
        review
    })

});


exports.getAllReviews =catchAsync (async(req,res,next)=>{

    const features = new APIFeatures(Review.find(),req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

    const reviews = await features.query;
    res.status(200).json({
        status:'success',
        resultats:reviews.length,
        reviews

    })

})



exports.getReview =catchAsync(async(req,res,next)=>{

    const review = await Review.findById(req.params.id);
    if(!review){
        return next (new ErrorHandler("Não existe nenhum comentário com este Id",404))
    }

    res.status(200).json({
        status:"success",
        review
    })
    


});



exports.deleteReview =catchAsync(async(req,res,next)=>{

    const review = await Review.findByIdAndDelete(req.params.id);
    if(!review){
        return next (new ErrorHandler("Não existe nenhum comentário com este Id",404))
    }

    res.status(204).json({
        status:"success",
        data:null
    })


})

exports.updateReview = catchAsync(async(req,res,next)=>{
    const review = await Review.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true});

    if(!review){
        return next (new ErrorHandler("Não existe nenhum comentário com este Id",404))
    }

    res.status(200).json({
        status:"success",
        review
    })

    


}
)