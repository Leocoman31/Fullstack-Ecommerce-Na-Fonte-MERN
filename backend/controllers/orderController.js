
const Product = require('../models/product');
const APIFeatures = require('../utilis/appiFeatures')
const catchAsync = require('../middlewares/catchAsync')
const ErrorHandler = require('../utilis/errorHandler');
const Order = require('../models/order');
const productController = require('../controllers/productController')



exports.createOrder = catchAsync(async(req,res,next)=>{
    

   
    const {
        orderItems,
        shoppingInfo,
        paymentInfo,
        paymentMethod,
        itemsPrice,
        deliveryPrice,
        user,
        shop,
        totalAmount,
  
        }= req.body




        const order = await Order.create({
            orderItems,
            shoppingInfo,
            paymentInfo,
            paymentMethod,
            itemsPrice,
            deliveryPrice,
            user,
            shop,
            totalAmount,
        
        });

        res.status(201).json({
            status:'success',
            data:order

        })
});


exports.getOrder =catchAsync(async(req,res,next)=>{
    const order = await Order.findById(req.params.id);
    if(!order){
        return next( new ErrorHandler("Não existe nenhuma ordem com este ID",404))
    }
    res.status(200).json({
        status:"success",
        order
    })


})

exports.getMyOrders = catchAsync(async(req,res,next)=>{

    const orders = await Order.find({user:req.user._id})
    res.status(200).json({
        status:"success",
        orders
    })

})


exports.getAllOrders = catchAsync(async(req,res,next)=>{
    let totalAmount = 0;
    const features = new APIFeatures(Order.find(),req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()

    const orders = await features.query;

    orders.forEach(order => {
        totalAmount += order.totalPrice
    })
    res.status(200).json({
        status:"success",
        totalAmount,
        resultats:orders.length,
        orders
    })



})


exports.getShopOrders = catchAsync(async(req,res,next)=>{

    const features = new APIFeatures(Order.find({shop:user._id}), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

    

    const orders = await features.query;
    if(!orders){
        return next (new ErrorHandler("Erro, não existe nenhuma loja com este ID",404))
    }

    res.status(200).json({
        status:"success",
        resultats:orders.length,
        orders
    })

})



exports.deleteOrder= catchAsync(async(req,res,next)=>{

    const order = await Order.findByIdAndDelete(req.params.id)

    if(!order){
        return next(new ErrorHandler("Nao existe nenhuma ordem com  este ID",404))
    }

    res.status(204).json({
        status:"success",
        data:null

    }
    )

})




exports.updateStatusOrder = catchAsync(async(req,res,next)=>{

    const order = await Order.findById(req.params.id);
    
    if(order.orderStatus === "Entregue"){
        return next (new ErrorHandler("Caro usúario esta encomenda já foi entregue",400))
    }


    if(req.body.statusOrder ==="Cancelado" || req.body.statusOrder ==="Enviando"){
        order.orderStatus = req.body.statusOrder;

    }

    if(req.body.statusOrder ==="Entregue"){
        order.orderItems.forEach(item =>{
            productController.updateStock(item.productId,req.body.quantity)
        })
        

    }
    order.save();
    res.status(200).json({
        status:"success",
        message:'Estado da encomenda alterado com sucesso'
    })

});


exports.updateStatusOrder = catchAsync(async(req,res,next)=>{


    console.log(req.params.id);
    const order = await Order.findByIdAndUpdate(req.params.id, {
        orderStatus:"Confirmado"
    });

    console.log(order)
    
   

    res.status(200).json({
        status:"success",

    })

});

