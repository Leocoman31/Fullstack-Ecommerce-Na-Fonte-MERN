const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const validator = require('validator');

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Digite o nome da sua loja"]
  },
  email: {
    type: String,
    required: [true, "Digite o email da sua loja"],
  },

  
  description: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    default:0,
    required: true,
  },


   userId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'User',
          required:true
      },

    
  avatar: {
    public_id: {
      type: String,
  
    },
    url: {
      type: String,
     
    },
  },
  
  withdrawMethod: {
    type: Object,
  },
  availableBalance: {
    type: Number,
    default: 0,
  },
  transactions: [
    {
      amount: {
        type: Number,
        
      },
     
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      updatedAt: {
        type: Date,
      },
    },
  ],

  status:{
    type:String,
    default:"Processando",
    enum:{
      values: ["Processando", "Confirmado","Verificado"],

    }
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
   passwordChangedAt:Date,
    passwordResetToken:String,
    passwordResetExpires:Date,
    
    active:{
        type:Boolean,
        default:true,
        select:false
    }
});



//Middleware que codifica a password
shopSchema.pre('save',async function (next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,12);
    this.passwordConfirm =undefined
    next();
});


// Middleware que verifica se a password foi alterada
shopSchema.pre('save',async function(next) {
    if(!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = Date.now() - 1000;
    return next();

});





// Middleware que esconde os usuarios na ativos(supostos eliminados) em qualquer consulta.
shopSchema.pre('/^find/',function(next){
    this.find({active:{ne:false}});
    next();
});

shopSchema.methods.correctPassword= async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword);

}


// metodo de instancia que verifica se a password foi alterada 
shopSchema.methods.changedPasswordAfter = function(JWTTimestamp){
    if(this.passwordChangedAt){
     const changedTimestamp = parseInt(this.passwordChangedAt.getTime()/1000,10);
    return JWTTimestamp < changedTimestamp;
 
    }
    
     return false;
 }

 // Metodo de instancia para gara um token de reset password 
 shopSchema.methods.createPasswordResetToken=function(){
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken=crypto.createHash('sha256').update(resetToken).digest('hex');

    this.passwordResetExpires = Date.now()+10*60*1000;
  
    return resetToken;

};



const Shop = mongoose.model("Shop",shopSchema);

module.exports = Shop