const express = require("express");
const app = express();

const port = 33453;

app.set("view engine", "ejs");

app.get("/ig/:username", (req, res)=>{
    const followers = ["Sandeep", "Arvesh", "Durvesh", "kumar", "Vipen"]
    let {username} = req.params;
    res.render('home', {username, followers})
});

app.listen(port, ()=>{
    console.log(`Welcome to the port ${port}`);
})