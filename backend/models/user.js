const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto')


const userShema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, 'Digite o seu nome'],
        maxLength:[50, "Seu nome não pode exceder 50 caracteres"],
        minLength:[3, "Seu nome não ser menos de caracteres"]
    },

    email:{
        type: String,
        required: [true, 'Digite o seu email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail, 'Por favor insire um email valido']
    },

    verified:{
    type:Boolean, 
    default:false
    },
    phoneNumber:{
        type: Number,
        default:0
      },
    

    password:{
        type: String,
        required: [true, 'Digite a sua password'],
        minLength:[8, "Sua password deve ter mais de 8 caracteres"],
        select:false
    },


    passwordConfirm:{
        type:String,
        required:[true,'Por favor confirma a sua password'],
        validate:{
            validator:function (el){
                return el === this.password;

            },
            message:'passwords não correspondem'
        }
    },

    addresses:
        {
          country: {
            type: String,
            default:"Angola"
          },
          city:{
            type: String,
          },
          address1:{
            type: String,
          },
          address2:{
            type: String,
          },
          
        },
    

    photo:{

            public_id: {
              type: String,
              default:""
              
            },
            url: {
              type: String,
              default:""
            
            
            }
          
   
    },

    role:{
        type: String,
        required:[true,'Escolha o tipo de usuário']
    

    },

  
    passwordChangedAt:Date,
    passwordResetToken:String,
    passwordResetExpires:Date,
    
    active:{
        type:Boolean,
        default:true,
        select:false
    }
   
},

);


//Middleware que codifica a password
userShema.pre('save',async function (next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,12);
    this.passwordConfirm =undefined
    next();
});


// Middleware que verifica se a password foi alterada
userShema.pre('save',async function(next) {
    if(!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = Date.now() - 1000;
    return next();

});





// Middleware que esconde os usuarios na ativos(supostos eliminados) em qualquer consulta.
userShema.pre('/^find/',function(next){
    this.find({active:{ne:false}});
    next();
});

userShema.methods.correctPassword= async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword);

}


// metodo de instancia que verifica se a password foi alterada 
userShema.methods.changedPasswordAfter = function(JWTTimestamp){
    if(this.passwordChangedAt){
     const changedTimestamp = parseInt(this.passwordChangedAt.getTime()/1000,10);
    return JWTTimestamp < changedTimestamp;
 
    }
    
     return false;
 }

 // Metodo de instancia para gara um token de reset password 
 userShema.methods.createPasswordResetToken=function(){
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken=crypto.createHash('sha256').update(resetToken).digest('hex');

    this.passwordResetExpires = Date.now()+10*60*1000;
  
    return resetToken;

};








const User = mongoose.model("User",userShema);


module.exports = User;
