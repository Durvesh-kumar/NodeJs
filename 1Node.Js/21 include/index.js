const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname,"public/style")));
app.use(express.static(path.join(__dirname, "/public/js")));

const port = 2350;


app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"))

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    res.render('home', {username})
})
app.get("login", (req, res)=>{
    res.render('Login')
});

app.listen(port, (req, res)=>{
    console.log(`Welcome to the port ${port}`);
})