const mongoose=require('mongoose');
// const category = require('./category');

const {ObjectId} = mongoose.Schema;

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32

    },
    category:{
        type:ObjectId,
        ref:"Category",
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true,
        maxlength:200
    },
    stock:{
        type:Number
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data: Buffer,
        contentType:String
    }
},{timestamps:true});


module.exports=mongoose.model("Product",productSchema);