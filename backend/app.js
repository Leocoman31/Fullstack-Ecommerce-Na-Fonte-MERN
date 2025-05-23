const express = require("express");
const userRouter =require('./routers/userRouter');
const productRouter =require('./routers/productRouter');
const reviewRouter =require('./routers/reviewRouter');
const shopRouter =require('./routers/shopRouter');
const orderRouter = require('./routers/orderRouter');
const withDrawsRouter = require('./routers/withDrawRouter');
const eventRouter =require('./routers/eventRouter');
const coupoundRouter = require('./routers/couponCodeRouter');
const paymentRouter = require('./routers/paymentRouter')
const notificationRouter = require('./routers/NotificatiosRouter')
const errorMiddleware = require("./middlewares/errorMiddleware");
const cookieParser = require('cookie-parser');
const cors = require('cors');








const app =express()


app.use(express.json({limit:'5mb'}));

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods : ['get','post','delete','patch'],
        allowedHeaders: [
            "Content-type",
            "Authorization",
            "Cach-control",
            "Expires",
            "Pragma"
        ],
        credentials: true

    }))

    app.use(cookieParser());

app.use('/api/v1/users',userRouter)
app.use('/api/v1/products',productRouter)
app.use('/api/v1/reviews',reviewRouter)
app.use('/api/v1/shops',shopRouter)
app.use('/api/v1/orders',orderRouter)
app.use('/api/v1/withdraws',withDrawsRouter)
app.use('/api/v1/events',eventRouter)
app.use('/api/v1/coupounds',coupoundRouter)
app.use('/api/v1/payments',paymentRouter)
app.use('/api/v1/notications',notificationRouter)

app.use(errorMiddleware)


module.exports =app