const mongoose = require('mongoose');



const  eventSchema = new mongoose.Schema({


    name:{
        type: String,
        required:[true,"Digite o nome do evento do producto!"],
    },
    description:{
        type: String,
        required:[true,"Digite a descrição do evento do producto! "],
    },
  
    start_Date: {
        type: Date,
        required: true,
      },
      finish_Date: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        default: "Running",
      },
      imageCover:[{
        public_id: {
            type: String,
            
          },
          url: {
            type: String,
          
          },

      }],

   
    discount:{
        type: Number,
        required: [true,"Digite o desconto promorcional!"],
    },
  
   
    shop:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Shop",
        required: true,
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
 
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});



const Event = mongoose.model("Event",eventSchema);

module.exports = Event;