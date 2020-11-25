const User = require("../models/user")
const {check, validationResult}= require('express-validator');
var jwt = require('jsonwebtoken');
var expressjwt = require('express-jwt');

exports.signup=(req,res)=>{
   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }




    const user= new User(req.body)
    user.save((err, user)=>{
        if(err){
            return res.status(400).json({
                err:"NOT ablr to save user in DB"
            })
        }
        res.json({
            "name":user.name,
            "lastname":user.lastname,
            "email":user.email,
            "id":user._id
        })
    })
};


exports.signin=(req,res)=>{
    const {email,password} = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    User.findOne({email},(err,user)=>{
        if(err || !user){
            res.status(400).json({
                error:"email does not exist"
            })
        }
        if(!user.authenticate(password)){
          return res.status(401).json({
              error:"email and password do not match"
          })

        }
        //CREATE TOKEN
        var token = jwt.sign({ _id: user._id }, process.env.SECRET);
       //put token in cookie 
       res.cookie("token",token,{expire:new Date()+9999})
       // Send response to front end

       const{_id,name,email,role}=user;
       return res.json({token,user:{_id,name,email,role}})
    });



};




exports.signout=(req,res)=>{
    res.clearCookie("token");
    res.json({
        message:"User signed out successfully"
    })
}
