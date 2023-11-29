const express = require("express");
const app = express();

const port = 2402;

app.set("view engine", "ejs");

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    console.log(username);
    res.render('Instagrame', {username})
});

app.listen(port, ()=>{
    console.log(`Welcome to the port ${port}`);
})