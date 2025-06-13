
const mongoose = require('mongoose');




const orderSchema = new mongoose.Schema({
    
        shoppingInfo: {
          address: {
            type: String,
          
          },
          city: {
            type: String,
            required: true,
          },
          phoneNo: {
            type: String,
            required: true,
          },
          
          country: {
            type: String,
           default:"Angola"
          },
        },
    
        orderItems: [
          {
              name: {
                  type: String,
                  required: true
              },
              quantity: {
                  type: Number,
                  required: true
              },
              images: [{
                public_id:{
                  type:String
                },
                url:{
                  type:String
                }

                 
              }
            ],
              price: {
                  type: Number,
                  required: true
              },
              productId: {
                  type: mongoose.Schema.Types.ObjectId,
                  required: true,
                  ref: 'Product'
              },

              shop:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Shop"
            },

            seller:{
              type:mongoose.Schema.Types.ObjectId,
              required:true,
              ref:"User"
            },

            color:{
              type:String
            },
            prodSize:{
              type:String
            }
          }
      ],
        
    
        paymentMethod: {
          type: String,
          required: [true, "Seleciona o metodo de pagamento"],
          enum: {
            values: ["Transferencia", "card"],
            message: "Selecione por favor: Transferencia or Cash",
          },
        },
       
        itemsPrice: {
          type: Number,
          required: true,
          default:0.0
      
        },
    
        deliveryPrice: {
          type: Number,
          default: 0.0
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

  

 
        
     
        totalAmount: {
          type: Number,
          required: true,
          default:0.0
        },
        orderStatus: {
          type: String,
          enum: {
            values: ["Processando", "Confirmado", "Enviando", "cancelado", "Entregue"],
            message: "Por favor selecione o estado da compra",
          },
          default: "Processando",
        },
        
    
        orderCreateAt:{
        type: Date,
        default: Date.now
      },
    
        deliveredAt: Date,
    



});



const Order = mongoose.model("Order",orderSchema);


module.exports = Order