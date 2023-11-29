const express = require("express");

const app = express();

let port = 2004;

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render('home')
})
// app.get("/rolledice", (req, res)=>{
//     res.render('Rolledice')
// })

app.get("/random", (req, res)=>{
    let value = Math.floor(Math.random()*6)+1;
    // res.render('Random', {num: value})
    res.render('Romdem',{value})
})

app.listen(port, ()=>{
    console.log(`Welcome to the port ${port}`);
})