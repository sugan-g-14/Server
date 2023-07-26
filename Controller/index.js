const express = require('express')
const datas = require('../model/Products');
const cartDatas = require('../model/Cart')
const axios = require('axios');

exports.getData = async (req,res) =>{
    try{
        let data = await datas.find();
        res.send(data);
    }
    catch(err){
        res.send('cannot get')
    }
}

exports.addData = async (req,res) =>{
    try{
        console.log("calling add");
        console.log(req.body);
        // res.send(req.body);
        const newData = await datas.create(req.body);
        return res.status(201).json({
            success:true,
            data:newData
        })
    }
    catch(err){
        res.send('cannot add');
    }
}

exports.getCart = async(req,res) =>{
    try{
        const cartData = await cartDatas.find();
        res.send(cartData);
    }
    catch(err){
        res.send('cannot get cart')
    }
}

exports.addCart = async(req,res) =>{
    try{
        const newCartData = await cartDatas.create(req.body);
        return res.status(201).json({
            success:true,
            data:newCartData
        })
    }
    catch(err){
        res.send(err);
    }
}

// exports.increment = async(req,res) =>{
//     try{
//         const updated = req.body.count++;
//         const updateData = await cartDatas.findOneAndUpdate({id:req.body.id},updated,{new:true})
//     }
//     catch(err){
        
//     }
// }