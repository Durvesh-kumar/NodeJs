const express = require("express");
const app = express();

const port = 4943;

app.set("view engine", "ejs");

app.get("/ig/:username", (req, res)=>{
    const instaData = require('./data.json');
    let {username} = req.params;
    let data = instaData[username];
    if(data){
        res.render('home', {data})
    }else{
        let {username} = req.params
        res.render('error', {username})
    }
});

app.listen(port, ()=>{
    console.log(`Welcome to the port ${port}`);
})