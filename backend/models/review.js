const mongoose = require('mongoose');
const Product = require('../models/product')




const reviewSchema = new mongoose.Schema({
    review:{
        type:String,
        required:[true,'Digite o seu comentário']
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'Product',
        required:[true,'O comentario deve pertencer a um produto ']
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true,'O comentário deve pertencer a um usuario']


    },

    imagesReviews:[
        {
            public_id:{
                type:String,
                default:""
            },

            url:{
                type:String,
                 default:""
            }
        }
    ]
        
    
},
    {
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
    }
    );



    reviewSchema.pre(/^find/, function(next){
        this.populate({
            path:'user',
            select:'name photo'
        });
        next();

    });


    
    reviewSchema.statics.calcAverageRatings = async function(productId){
        const stats =  await this.aggregate([
              {
                  $match:{product:productId}
              },
              {
                  $group:{
                      _id:'$product',
                      nRating:{$sum:1},
                      avgRating:{$avg:'$rating'}
  
                  }
              }
          ]);
  
         
          if(stats.length>0){
              await Product.findByIdAndUpdate(productId,{
                  ratingQuantity:stats[0].nRating,
                  ratingAverage:stats[0].avgRating
              });
      
          }
          else{
              await Product.findByIdAndUpdate(productId,{
                  ratingQuantity:0,
                  ratingAverage:4.5
              });
      
  
          }
          
         
  
       
  
         
      }
  
      reviewSchema.post('save', function(){
          this.constructor.calcAverageRatings(this.product);
        
  
      });
  
      reviewSchema.pre(/^findOneAnd/,async function(next){
      this.r = await this.findOne();
          next();
      });
  
      reviewSchema.post(/^findOneAnd/,async function(){
          await this.r.constructor.calcAverageRatings(this.r.product)
      
          });

const Review = mongoose.model('Review',reviewSchema);



module.exports = Review