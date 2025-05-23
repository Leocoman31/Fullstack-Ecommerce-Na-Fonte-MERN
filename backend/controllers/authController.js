const catchAsync = require("../middlewares/catchAsync");
const User = require('../models/user');
const Shop = require('../models/shop');
const jwt = require('jsonwebtoken');
const crypto =require('crypto');
const {promisify} =require('util');
const ErrorHandler =require('../utilis/errorHandler');
const { v4: uuidv4 } = require('uuid');
const sendMail = require("../utilis/sendEmail");
const bcrypt = require("bcrypt");
const UserVerification = require("../models/useverification.");
const path = require("path");





exports.getVerify = catchAsync (async(req,res,next)=>{
    const{user, uniqueString} =  req.params;


    const userVerification = await UserVerification.find({user});
    if(!userVerification){
        return next(new ErrorHandler("Essa conta não existe ou já foi verificada. Por favor cadastra-se ou faça o login",404))
    }
    const {expireAt} = userVerification
    if(expireAt< Date.now()){
        await  userVerification.deleteOne({user});
        await User.findOneAndDelete({_id:user})
        return next(new ErrorHandler("O link de confirmação expirou, cadastra-se novamente!",401))

    }


    const hashUniqueString = userVerification.uniqueString;

    const comparar = await bcrypt.compare(uniqueString,hashUniqueString);
    if(!comparar){
        return next (new ErrorHandler("Ocorreu um erro, verifique o link de verificação que lhe foi enviado no seu email",401))

    }

    const userVerified = await User.findByIdAndUpdate({_id:user},{verified:true});
    await  userVerification.deleteOne({user});

    res.status(203).json({
        status:"success",
        userVerified
        
    })





   
})

exports.accountVerifiedPage = catchAsync(async(req,res,next)=>{

    res.sendFile(path.join(__dirname, "../views/confirmEmailTemplate.html"));

})

const sendVerificationEmail = (id,email,name)=>catchAsync(async(req,res,next)=>{

    console.log("coman")
const currentUrl = "http://localhost:4000/";

const uniquerString = uuidv4() + id;





await  sendMail({
    email:  email,
    subject: "Ativação da sua conta",
    html: `<p>Ola ${name}, Por favor Verifique o seu email para fazer ativação da sua conta.</p><p>Esse Link
        <br>expira em 6 horas </br></p><p> Clique <a href=${currentUrl + "user/verify/" + id + "/" + uniquerString}>aqui</a> para prosseguir.</p>`
  });


  const saltRounds = 10;
  const uniquerStringQuery = await bcrypt.hash(uniquerString,saltRounds);

  console.log(uniquerStringQuery);

  const userVerification = await UserVerification.create({
    user:id,
    uniqueString:uniquerStringQuery,
    createdAt:Date.now(),
    expireAt:Date.now() + 21600000


}



  )


  console.log(userVerification);

  
res.status(200).json({
    status:"pendent",
    message:"Email de verificação enviado"
})




})
const signToken =(id)=>{

    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN})

}

const createSendToken=(user,statusCode,res)=>{

    const token = signToken(user._id);
    const cookieOptions ={
      expires:new Date(Date.now() + 30*24*60*60*1000 ),
       
      hhtpOnly:true

  }
  if (process.env.NODE_EN==='production') cookieOptions.secure =true;
   res.cookie('jwt',token,cookieOptions);
    res.status(statusCode).json({
        status:'success',
        token,
        data:{
            user:user
        }
 } )



}




    






exports.logout =(req,res) =>{
    res.cookie('jwt','loggedout',{
        expires: new Date(Date.now() + 10*1000),
        httpOnly:true
    });
    res.status(200).json({status:'success'})
}




exports.restrictTo =(...roles)=>{
    
 
    return(req,res,next)=>{
       
        
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler("Caro usúario, não tem permissão para essa ação",403));
            
        }

        
       

        next();
    }
}


exports.forgotPassword = catchAsync(async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email});
    if(!user){
       
        return next(new ErrorHandler('Não existe usúario com este email',404));


    }

    const resetToken = user.createPasswordResetToken();
   
    await user.save({validateBeforeSave:false});


    const resetURL=`${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;
    const message=`Esqueceu a sua password? Envie uma solicitação de atualização com sua nova password  e confirmação de passowrd para:${resetURL}.\n Se você não esqueceu sua senha, ignore este e-mail!`;
   
    try{
   //await sendEmail({
      //  email:user.email,
       // subject:'Your passord reset token valid for 10min',
      //  message
  //  });

  //await new Email(newUser,resetURL).sendPasswordReset();

    
    res.status(200).json({
        status:'success',
        message:"token enviado no email"
    })
}catch(err){
    user.passwordResetToken = undefined;
    user.passwordResetExpires =undefined;
    await user.save({validateBeforeSave:false});
    res.status(500).json({
        status:'fail',
        message:err.message
    })

    //return next(new AppError("There was an error sending the email.Try again later!.",500))


}
})


exports.resetPassword= catchAsync(async(req,res,next)=>{
   // 1) acessar o usuario com base no token
   const hashedToken = crypto
   .createHash('sha256')
   .update(req.params.token)
   .digest('hex');

   const user =await User.findOne({passwordResetToken:hashedToken,passwordResetExpires:{$gt:Date.now()}});
//2) Verificar se ha usuario e se o token ainda nao expirou

if(!user){
    return next( new ErrorHandler('Token inválido ou expirado', 400))
}

user.password = req.body.password;
user.passwordConfirm = req.body.passwordConfirm;
user.passwordResetToken = undefined;
user.passwordResetExpires=undefined;

await user.save();

createSendToken(user,200,res);


});

exports.updateMyPassword = catchAsync(async (req,res,next)=>{
    //1) Acessar o usuario 
    const user = await User.findById(req.user._id).select('+password');
    
    //2)verificar se a passe esta correcta
    if(!(await user.correctPassword(req.body.passwordCurrent,user.password))){
        return next(new ErrorHandler('Caro usúario a sua passaword esta errada',401));
    }
    //3) se a password estiver correcta, atualizar 
    user.password=req.body.password;
    user.passwordConfirm =req.body.passwordConfirm;

    console.log("feito")
    
    
    await user.save();
    
    //4)log user in, enviar JWT
    createSendToken(user,200,res);
    
    
    });


exports.isAuth = async(req,res,next)=>{
   
    if(req.cookies.jwt){
        try{

    const decoded = await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);
    if(!currentUser){
       return next();
    }

    if(currentUser.changedPasswordAfter(decoded.iat)){
        return next();

    }
    
    res.status(200).json({
        status:"sucess",
        user:currentUser

    })
}catch(err){
    return next();

}
    }




}


exports.protect = catchAsync(async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         token = req.headers.authorization.split(' ') [1];
        
       

    }else if(req.cookies.jwt){
        token = req.cookies.jwt;
       
    

    }

    if(!token){
        return next(new ErrorHandler('Caro usúario não estais logado.! Por favor, faça o login para ter acesso',401));
    }

    const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);
    
   

    const currentUser = await User.findById(decoded.id);
    
    if(!currentUser){
        console.log(decoded.id);
        return next(new ErrorHandler('O usúario pertencente a este token já não existe',401));
    }

    if(currentUser.changedPasswordAfter(decoded.iat)){
        return next(new ErrorHandler(' O usúario recentemente alterou a password!. Por favor faça o login novamente',401));

    }
    req.user=currentUser;
    res.locals.user =currentUser;
    next();

});



exports.register=catchAsync (async(req,res,next)=>{





    const newUser = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwordConfirm:req.body.passwordConfirm,
        role:req.body.role,
        verified:false
    });




     sendVerificationEmail(newUser._id, newUser.email,newUser.name);
    createSendToken(newUser,201,res);

})



exports.loginUser =catchAsync(async(req,res,next)=>{
    
    const {email,password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler('Caro Usuário, insire o email e a password para logar',400));

    } 

    const user =await  User.findOne({email}).select('+password');
    if(!user || !(await user.correctPassword(password,user.password))) 
    {
        return next(new  ErrorHandler('O seu email e passaword não estão correctos',401) )
    }
   


    createSendToken(user,200,res);

})

