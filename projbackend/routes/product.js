const express = require("express")
const router = express.Router()

const {getProductById, createProduct,getProduct,photo,updateProduct,removeProduct, getAllProducts} = require("../controllers/product")
const {isAdmin,isAuthenticated,isSignedIn} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")

//CategoryId params- Middleware
router.param("productId",getProductById);
//userId params middleware
router.param("id",getUserById)

//all actual routes
//create route
router.post("/product/create/:id",isSignedIn,isAuthenticated,isAdmin,createProduct)
// read route
router.get("/product/:productId",getProduct)
router.get("/product/photo/:productId",photo);
// update route
router.put("/product/:id/:productId",isSignedIn,isAuthenticated,isAdmin,updateProduct)
// delete route
router.delete("/product/:id/:productId",isSignedIn,isAuthenticated,isAdmin,removeProduct)
// listing products route
router.get("/products",getAllProducts)

module.exports = router;