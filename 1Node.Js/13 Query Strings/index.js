const expess = require("express");

const app = expess();
let port = 4003;

app.listen(port, ()=>{
    console.log(`Welcome to new port ${port}`);
})

app.get("/search", (req, res)=>{
    // console.log(req.query);
    let {Q,id} = req.query
    let code = `Welcome to the page @${Q}.`
    res.send(code)  // localhost:port/search?q=""
})