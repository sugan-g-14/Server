const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Cart = new Schema(
{
    "name":{
        "type":"String"
    },
    "id": {
        "type": "Number"
    },
    "title": {
        "type": "String"
    },
    "price": {
        "type": "Number"
    },
    "description": {
        "type": "String"
    },
    "category": {
        "type": "String"
    },
    "image": {
        "type": "String"
    },
    "rating": {
        "rate": {
        "type": "Number"
        },
        "count": {
        "type": "Number"
        }
    }
},{timestamps:true}
)

module.exports = mongoose.model("Cart",Cart);

