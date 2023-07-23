const express = require('express');
const routerCart = express.Router();
const Cart = require('../model/Cart');
const {getCart,addCart} = require('../Controller');

routerCart.get('/',getCart);
routerCart.post('/',addCart);


module.exports = routerCart