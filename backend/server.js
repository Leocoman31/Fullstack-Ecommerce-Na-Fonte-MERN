
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'});
const app = require('./app');
const mongoose = require('mongoose');


const DB = `mongodb+srv://${process.env.USERNAME_DATABASE}:${process.env.PASS_DATABASE}@cluster0.si7w4.mongodb.net/Na_fonte`


mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>
console.log("Database connection sucessfully")
).catch((error) => console.log(error))

const port = process.env.PORT;



const server = app.listen(port, () =>{
    console.log(`Welcome from server. App is running on port ${port} `);
})






