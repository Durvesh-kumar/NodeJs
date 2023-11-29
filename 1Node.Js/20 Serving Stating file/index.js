const exp = require("constants");
const express = require("express");

const app = express();
app.use(express.static('public'))
const port = 2434;

app.set("view engine", "ejs");

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    res.render('home', {username})
});

app.listen(port,()=>{
    console.log(`Welcome to the port ${port}`);
})