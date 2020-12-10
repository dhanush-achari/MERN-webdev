const Product = require("../models/product")

exports.getProductById = (req,res,next,productId)=>{
    Product.findById({productId})
    .populate("category")
    .exec((err,product)=>{
        if(err){
            return res.status(400).json({
                error:"Invalid Product ID or Product not Found"
            })
        }
        req.product=product
        next()
    })
    
    
}