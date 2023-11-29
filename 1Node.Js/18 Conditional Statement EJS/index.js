const express = require("express");

const app = express();
const port = 28946;

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    const value = Math.floor(Math.random()*6)+1
    res.render('home', {value});
});

app.listen(port, ()=>{
    console.log(`Welcome to the port ${port}`);
})
