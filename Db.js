const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kavin:kavin@cluster.em1gjuw.mongodb.net/')
.then((res)=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

mongoose.set('strictQuery', false);