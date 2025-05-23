const ErrorHandler = require("../utilis/errorHandler")

module.exports = (err,req,res,next)=>{
    let error={
        statusCode: err?.statusCode || 500,
        message: err?.message || "Internal Server Error",
    };

    if(err.name ==='CastError'){
        const message =`Resource not found. Invalid: ${err?.path}`
        error = new ErrorHandler(message,400);
    }
    if(err.name ==='validationError'){
        const message =Object.values(err.errors).map((value) =>value.message);
        error = new ErrorHandler(message,400);
    }

    if(err.code ===11000){
        const value =err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
        const message = `duplicate field value:${value}. Please use another value`;
        error = new  ErrorHandler(message,400);
    }

    if(error.name === 'JsonWebTokenError'){
        const message ='Invalid token. Please log in again ';
        error = new ErrorHandler(message,401);
    }
    
    if(error.name ==='TokenExpiredError'){
        const message = 'Your Token has expired.! Please login again';
        error = error = new ErrorHandler(message,401)
    }



    if(process.env.NODE_ENV === 'DEVELOPMENT'){
        res.status(error.statusCode).json({
            message: error.message,
            error:err,
            stack:err?.stack,
        });
    
    }
    if(process.env.NODE_ENV === 'PRODUCTION'){
        res.status(error.statusCode).json({
            message: error.message,
        });
    
    }
    
};