
const Product = require('../models/product');
const APIFeatures = require('../utilis/appiFeatures')
const catchAsync = require('../middlewares/catchAsync')
const ErrorHandler = require('../utilis/errorHandler');
const Shop = require('../models/shop');
const cloudinary =require('../helpers/cloudinary');
const sendMail = require('../utilis/sendEmail');









  exports.getReleteProducts =catchAsync(async(req,res,next)=>{
 


  const product =await Product.findById(req.params.id);
  let query = product.category;



  const regEx = new RegExp(query, "i");

  
  const createSearchQuery = {
    $or: [
   
      { category: regEx },
      { name: regEx },
      { brand: regEx },


      
  
    ],
  };


  const data = await Product.find(createSearchQuery)
  res.status(200).json({
    status:"success",
    data


  })
}
);


exports.getProductsWthSameName =catchAsync(async(req,res,next)=>{
 


  const product =await Product.findById(req.params.id);
  let query = product.name;



  const regEx = new RegExp(query, "i");

  
  const createSearchQuery = {
    $or: [
   
      { name: regEx }
      
  
    ],
  };


  const data = await Product.find(createSearchQuery)
  res.status(200).json({
    status:"success",
    data


  })
}
);


exports.aliasSpecialProduct = (req,res,next) => {
  req.query.limit='10';
  req.query.sort = 'price'; 
  next();
  
}






exports.getAllProductsSeller = catchAsync(async(req,res,next)=>{

 
  const user = req.user._id;

  
  const products = await Product.find();
 

  if(!products){
    return next(new ErrorHandler("Não existe nenhum producto adicionado", 404))
  }


  console.log("coman")
  res.status(200).json({
    status:"success",
    results:products.length,
    products
  })


})

// get all products shop
exports.getAllproductsShop = catchAsync(async (req,res,next)=>{
  
  const shop =req.shop._id;

 

  const products = await Product.find({shop});

  if(!products){
    return next (new ErrorHandler("Essa loja esta vazia, adiciona um producto",404))

  }

  res.status(200).json({
    status:'success',
    results:products.length,
    products
  })

})

exports.searchProducts = catchAsync(async (req, res,next) => {
    
          const {keyword}  = req.params;
        
          
          if(keyword === " "){
          const searchResults = await Product.find();
      
          res.status(200).json({
            resultat:searchResults.length,
            status:'success',
            data: searchResults,
          });

          }
    
          if (!keyword || typeof keyword !== "string") {
           
              return next(new ErrorHandler('Impossivel Procurar! Dado inválido',400))
       
          }
      
          const regEx = new RegExp(keyword, "i");

       
      
          const createSearchQuery = {
            $or: [
              { name: regEx },
              { category: regEx },
              
          
            ],
          };


       
      
          const searchResults = await Product.find(createSearchQuery);
          
      
          res.status(200).json({
            resultat:searchResults.length,
            status:'success',
            data: searchResults,
          });
     
      });



//admin and user
exports.getAllProducts = catchAsync(async (req,res,next) =>{
 


  
    const features = new APIFeatures (Product.find(),req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

    const data = await features.query

    res.status(200).json({
        status:"success",
        results:data.length,
        data
    })


});

// get product details

exports.getProduct = catchAsync(async(req,res,next)=> 

{

    const product = await Product.findById(req.params.id).populate({path:"reviews"})


    if(!product){
        return next( new ErrorHandler('não existe producto com este id', 404))

    }

    res.status(200).json({
        status:"success",
        product
    })



})


// add product shop
exports.AddProduct =catchAsync(async(req,res,next)=>{

    
        const shop = await Shop.findById(req.body.shop);
        if (!shop) {
          return next(new ErrorHandler("Essa loja não existe!", 404));
        } 

      


        let images = [];
  
          if (typeof req.body.images === "string") {
            images.push(req.body.images);
          } else {
            images = req.body.images;
          }

        
       
          const imagesLinks = [];
        
          for (let i = 0; i < images.length; i++) {

            
            const result = await cloudinary.uploader.upload(images[i],{folder: 'Mercado-Online/products'})
      .catch((error) => {
          console.log(error);
      })
            
           
            imagesLinks.push({
              public_id: result.public_id,
              url: result.secure_url,
            })
          }
        
          const productData = req.body;
        productData.images = imagesLinks;
     
     
    
       
          const product = await Product.create(productData);
  
          res.status(201).json({
            status: 'success',
            product,
          });
        
     
    

})

// update product shop
exports.updateProduct = catchAsync(async(req,res,next)=>{

    const data = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true

    })

    if(!data){
        return next(ErrorHandler(`não existe nenhum producto com este id`,404))
    }

    res.status(200).json({
        status:"success",
        data
    })

});


// delete product shop
exports.deleteProduct=catchAsync(async(req,res,next)=>{

  
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product){
        return next(new ErrorHandler('Não existe nenhum producto com este ID',404));
    }

   for (let i = 0; 1 < product.images.length; i++) {
      const result = await cloudinary.v2.uploader.destroy(
        product.images[i].public_id
      );
    }

    res.status(204).json({
        status:'success',
        data:null

    })
  

});


exports.updateStock = (id,quantity) =>catchAsync(async(req,res,next)=>{

  const product = await Product.findByIdAndUpdate(id);

  if(!product){
    return next (new ErrorHandler("Não existe nenhum produto com este ID",404))
  }

  product.stock = Math.abs(product.stock + quantity);
  await product.save({validateBeforeSave:false});

  res.status(200).jsn({
    status:"success",
    message:"O stock do producto foi atualizado"
  })



})




