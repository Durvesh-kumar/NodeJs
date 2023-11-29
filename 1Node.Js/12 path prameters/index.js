const express = require("express");

const app = express();

let port = 8012;

app.listen(port, ()=>{
    console.log(`app is listenning on path ${port}`);
});

app.get("/", (res, req)=>{
    res.send("hii i am root");
});

app.get("/:username", (req,res)=>{
    let {username, id} = req.params;

    let code = `Welcome to the page @ ${username}.`;
    // res.send(`Welcome to the page of ${username}.`);
    res.send(code);
});