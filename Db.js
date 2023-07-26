const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then((res)=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

mongoose.set('strictQuery', false);