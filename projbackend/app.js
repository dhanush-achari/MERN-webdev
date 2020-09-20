const mongoose= require('mongoose');
const express=require('express');
const app=express();
const port=8000;
const bodyParser= require('body-parser');
const cors= require('cors')
const cookieParser= require("cookie-parser")
require('dotenv').config();




mongoose.connect(process.env.DATABASE, 
{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true

}

).then(()=>
console.log('DB CONNECTED')
);

app.use(bodyParser.json())
app.use()
app.use()

app.listen(process.env.PORT || port,()=>console.log(`App is running on port ${port}`));
