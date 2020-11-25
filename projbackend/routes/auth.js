var express = require('express')
var router = express.Router()
const {check, validationResult}= require('express-validator');


const {signout,signin,isSignedIn}= require("../controllers/auth")

const {signup}=require("../controllers/auth.js")
router.post("/signup",[
    check("name").isLength({ min: 3 }).withMessage('must be at least 3 chars long'),
    check("email").isEmail().withMessage('email is required'),
    check("password").isLength({ min: 3 }).withMessage("must be at least 3 chars long")
],signup);
router.get("/signout",signout);

router.post("/signin",[
    check("email").isEmail().withMessage('email must be entered'),
    check('password').isLength({min:1}).withMessage("password field is required")
],signin);

router.get("/testroute",isSignedIn,(req,res)=>{
res.send("This is protected route")});

module.exports=router;