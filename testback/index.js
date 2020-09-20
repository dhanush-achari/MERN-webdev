const express= require('express');
const app = express();
const port = 2000;

app.get('/',(req,res)=>{
    return res.send('Home Page');
});

app.get('/signout',(req,res)=>{
    return res.send('Your logged out');
});

const admin = (req,res)=>{
    res.send("This is admin");
}

const isAdmin = (req,res,next)=>{
    console.log("logged");
    next();
}
app.get('/admin',isAdmin,admin);



app.listen(port,()=>{
    console.log('server up and running');
});
 