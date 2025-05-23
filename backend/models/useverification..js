const mongoose = require("mongoose")



const userVerificationSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true]
    },
    uniqueString:String,
    createdAt:Date,
    expireAt:Date,
})


 


const UserVerification = mongoose.model("UserVerification",userVerificationSchema);



module.exports=UserVerification;