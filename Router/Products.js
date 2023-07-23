const express = require('express');
const router = express.Router();
const datas = require('../model/Products');
const {getData,addData} = require('../Controller');

router.get('/',getData);
router.post('/',addData);


module.exports = router