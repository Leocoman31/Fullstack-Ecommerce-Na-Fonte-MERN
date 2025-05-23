const mongoose =require('mongoose');
const slugify = require('slugify')


const productShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor digite o seu nome"],
        maxLength: [200, "Nome do produto não pode exceder 200 characters"],
      },
      originalPrice: {
        type: Number,
        required: [true, "Por favor digite o preço do produto"],
      },

      slug:String,

      discountPrice: {
        type: Number,
        default:0,
       
      },


      description: {
        type: String,
        required: [true, "Por favor digite a descrição do produto"],
      },
      ratings: {
          type:Number,
          default:4.5,
          min:[1,'Rating tem maior de  1.0'],
          max:[5,'Rating não pode ser maior de 5.0'],
          set:val=>Math.round(val*10)/10
      },

      category: {
        type: String,
        required: [true, "Por favor digite a categoria do produto"],
      },
      tags: {
        type: String,
      },

     
      stock: {
        type: Number,
        required: [true, "Digite a quantidade do produto em stock"],
      },
      sold_out: {
        type: Number,
        default: 0,
      },
      images: [
        {
          public_id: {
            type: String,
            
          },
          url: {
            type: String,
          
          },
        },
      ],

      flavor:[],

      size:[
      ],
      weight:[],

      color:{
        type: String
      },

      quantityReviews: {
        type: Number,
        
      },


      shop: {
        type: mongoose.Schema.Types.ObjectId,
          ref: "Shop",
        required: true,
      },
     
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
       
      },

      createdAt: {
        type: Date,
        default: Date.now
    },

    
    brand:{
      type:String,
      required:true

    },

    
    },


    {
      toJSON:{virtuals:true},
      toObject:{virtuals:true},

     
  });
  productShema.virtual('reviews',{
    ref:'Review',
    foreignField:'product',
    localField:'_id'
  })


  productShema.pre('save', function(next){
    this.slug = slugify(this.name,{lower:true});

    next();
});



  const Product = mongoose.model("Product",productShema);

  module.exports=Product;
    



