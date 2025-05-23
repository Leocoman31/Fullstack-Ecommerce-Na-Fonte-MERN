
const mongoose = require("mongoose")


const schemaNotification = new mongoose.Schema({
    message:{
        type:String
    },

    status:{
        type:String,
        default:"Não Lida",
        enum: {
            values: ["Lida", "Não Lida"],
          },


    },

    type:{
        type:String

    },

    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }


});





const Notification = mongoose.model("Notification",schemaNotification )


module.exports =Notification;