const catchAsync = require('../middlewares/catchAsync');
const User =require('../models/user');
const APIFeatures = require('../utilis/appiFeatures');
const ErrorHandler = require('../utilis/errorHandler');
const authController = require('../controllers/authController')
const {promisify} =require('util');
const jwt =require('jsonwebtoken');
const cloudinary =require('../helpers/cloudinary');


exports.getUser=catchAsync(async(req,res,next)=>{

    const user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorHandler("Não existe um usúario com este ID",404))
    }

    res.status(200).json({
        status:"success",
        user
    }
    )
})


exports.getMe=catchAsync(async(req,res,next)=>{
    req.params.id = req.user._id;
    next();
});


exports.getAllUsers=catchAsync(async(req,res,next)=>{

    const features = new APIFeatures(User.find(),req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

    const users = await features.query;
    res.status(200).json({
        status:'success',
        resultats:users.length,
        data:{
            users
        }
    })
})

exports.updateRole =catchAsync(async(req,res,next)=>{
    const user = await User.findByIdAndUpdate(req.params.id, {role:"Adimn"},{
        new:true,
        runValidators:true})

        if(!user){
            return next (new ErrorHandler("Não existe nenhum usúario com este ID ",404));
        }

        res.status(200).json({
            status:'success',
            user
        })

})

exports.deleteUser=catchAsync(async(req,res,next)=>{

    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
        return next( new ErrorHandler("Não existe nenhum usúario com este ID",404))
    }

    res.status(204).json({
        status:'success',
        data:null
    }
    )
})


exports.deleteMe = catchAsync(async(req,res,next)=>{
const userId = req.user._id;
    await User.findByIdAndDelete(userId,{active:false})
    res.status(204).json({
        status:"success",
        data:null
    })
    
});







exports.updateMe =catchAsync(async(req,res,next)=>{


    const user =await User.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true

    });

    res.status(200).json({
        status:"success",
        user
    })

});


exports.updateMyPhoto = catchAsync(async(req,res,next)=>{


  
 

    let user= await User.findById(req.user._id);
    if(req.body.photo !==""){

        const imageId = user.photo.public_id;

        
        if(imageId){
            await cloudinary.uploader.destroy(imageId);
            
        }


       
         const result = await cloudinary.uploader.upload(req.body.photo,{folder: 'Mercado-Online/users'})
              .catch((error) => {
                  console.log(error);
              })
         

              
              user = await User.findByIdAndUpdate(req.user._id,{photo:{
                public_id: result.public_id,
                url: result.secure_url

              }})



              }

             
          
            
             

       
   


    res.status(200).json({
        status:"success",
        user
    })

}) 



exports.updateMyAdress = catchAsync(async(req,res,next)=>{
    


    console.log(req.body.address2);

    const user = await User.findByIdAndUpdate(req.user._id, {addresses:{
      
        city:req.body.city,
        address1:req.body.address1,
        address2:req.body.address2
    }
    }
    )

   console.log(user.addresses)

    res.status(200).json({
        status:"success",
        user

    })

})





