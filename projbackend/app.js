const mongoose= require('mongoose');
const express=require('express');
const app=express();
const port=8000;
const bodyParser= require('body-parser');
const cors= require('cors')
const cookieParser= require("cookie-parser")
require('dotenv').config();

//My routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")


//DB CONNECTION
mongoose.connect(process.env.DATABASE, 
{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true

}

).then(()=>
console.log('DB CONNECTED')
);



//MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//My Routes
app.use("/api", authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes)




//PORT AND SERVER START
app.listen(process.env.PORT || port,()=>console.log(`App is running on port ${port}`));
