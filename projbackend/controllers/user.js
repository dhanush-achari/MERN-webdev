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
//TODO : get back here for password //GOT BACK AND DONE
req.profile.encry_password=undefined;
req.profile.salt= undefined;
req.profile.createdAt= undefined;
req.profile.updatedAt= undefined;
return res.json(req.profile);
}

// ASSIGNMENT
// exports.getAllUsers=(req,res)=>{
//     User.find().exec((err,users)=>{
//         if(err || !users){
//             return res.status(400).json({
//                 error:"No users found"
//             })
//         }
//      res.json({users})
//     })
// }

exports.updateUser =(req,res)=>{
    User.findByIdAndUpdate(
        {_id:req.profile._id},
        {$set:req.body},
        {new:true ,useFindAndModify:false},
        (err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"You are not authorised to update this user"
                })
             }
             user.salt= undefined;
             user.encry_password=undefined
             return(res.json(user))
        }
    )

}
