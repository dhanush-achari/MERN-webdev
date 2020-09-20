const mongoose=require('mongoose');
// const category = require('./category');

const {ObjectId} = mongoose.Schema;

const productCartSchema= mongoose.Schema({
    product:{
        type:ObjectId,
        ref:'Product'
    },
    name: String,
    count:Number,
    price: Number
             
});
const ProductCart=mongoose.model("ProductCart",productCartSchema);


const orderSchema=new mongoose.Schema({

    product:[productCartSchema],
    transactionid:{},
    price:{type:Number},
    address: String,
    updated: Date,
    user:{
        type: ObjectId,
        ref:'User'
    }

},{timestamps:true});
const Order =mongoose.Schema("Order",orderSchema);

module.exports={ Order, ProductCart};