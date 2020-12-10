const express = require("express")
const router = express.Router()

const {getProductById} = require("../controllers/product")
const {isAdmin,isAuthenticated,isSignedIn} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")

//CategoryId params- Middleware
router.param("productId",getProductById);
//userId params middleware
router.param("id",getUserById)


module.exports = router;