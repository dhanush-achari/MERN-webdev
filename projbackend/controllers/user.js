const User = require("../models/user");

exports.getUserById = (req,res,next,id)=>{

    User.findById(id,(err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error:"User not found in DB"
            })
        }
        req.profile=user;
        next();
    });

};

exports.getUser = (req,res)=>{
//TODO : get back here for password
return res.json(req.profile);
}
