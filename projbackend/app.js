const mongoose= require('mongoose');
const express=require('express');
const app=express();
const port=8000;
const bodyParser= require('body-parser');
const cors= require('cors')
const cookieParser= require("cookie-parser")
require('dotenv').config();

const authRoutes = require("./routes/auth")


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



//PORT AND SERVER START
app.listen(process.env.PORT || port,()=>console.log(`App is running on port ${port}`));
