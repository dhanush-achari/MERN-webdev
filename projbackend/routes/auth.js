var express = require('express')
var app = express()
var router = express.Router()


router.get("/signout",(req,res)=>{
    res.send("User signout");
})

module.exports=router;