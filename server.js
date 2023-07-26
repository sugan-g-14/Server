const express = require('express');
const Axios = require('axios');
const cors = require('cors');
const Db = require('./Db');
const mongoose = require('mongoose');
const datas = require('./model/Products')
const Cart = require('./model/Cart')
const routerProducts = require('./Router/Products')
const routerCart = require('./Router/Cart')
const multer = require('multer');
const upload = require("./Util/multer");
const dotenv = require('dotenv')
const cloudinary = require('./Util/cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
dotenv.config();

const app = express();

//middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//socket
const http = require('http');
const socketIO = require('socket.io')
const { Server } = require('socket.io')

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})


//Routes

app.use('/',routerProducts);
app.use('/Cart',routerCart);




app.post('/uploads',upload.single("image"),async (req,res)=>{
    try{
        console.log(req.file);
        res.send(req.file.path);
    }
    catch(err){
        res.json(err); 
    }
})


io.on('connection',socket=>{
    console.log(`Connected to ${socket.id}`);
    socket.on('call',()=>{
        console.log("Call using dispatch useEffect");
    })
    socket.on('AddCart',(product)=>{
        const newCart = new Cart({...product,name:'kavin'});
        newCart.save();
    })
    socket.on('RemCart',(product)=>{
        
    })
})

//listening to port

server.listen(5000,()=>{
    console.log("Port runnning in 5000");
})