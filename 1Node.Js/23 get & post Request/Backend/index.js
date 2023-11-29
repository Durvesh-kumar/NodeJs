const express = require("express");
const app = express();

const port = 3440;

app.use(express.urlencoded({extended: true}))   // For POST response
app.use(express.json());    // For Post response in json file

app.get("/register", (req, res)=>{
    console.log(req.query);
    let {name, password} = req.query;
    res.send(`stendard GET response Welcome ${name}!`)
})
app.post("/register", (req, res)=>{
    console.log(req.body);
    let {name, password} = req.body;
    res.send(`stendard POST response ${name}`)
})

app.listen(port, ()=>{
    console.log(`Welcome to the Port ${port}`);
})