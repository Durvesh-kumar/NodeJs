const express = require("express");

const app = express()

const port = 20090;
app.set ("view engine", "ejs"); 
app.get("/", (req,res)=>{
    res.render('home');
})

app.listen(port,()=>{
    console.log(`Welcome to the port ${port}`);
});