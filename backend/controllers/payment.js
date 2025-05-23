const catchAsync = require("../middlewares/catchAsync");
const stripe = require('stripe')(process.env.STRIPE_PASSWORD)

exports.processPayment = catchAsync(async(req,res,next)=>{

    const line_items = req.body.cartItens.map(item =>{
        return{
            price_data:{
                currency:"usd",
                product_data:{
                    name:item.name,
                    metadata:{
                        id:item.productId
                    }
                },
                unit_amount:item.price*100,

            },
            quantity:item.quantity
        }
    });


 
    const session = await stripe.checkout.sessions.create({
        line_items,
    
      mode: 'payment',
      success_url: 'http://localhost:5173/sucessfull-payment',
      cancel_url:'http://localhost:5173/orderInfo'
    });
 
    res.send(({url:session.url}))
})