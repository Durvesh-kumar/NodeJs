const expres = require('express');
const app = expres();
const port = 3353;
const path = require('path');

app.use(expres.urlencoded({extended: true}))
app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expres.static(path.join(__dirname, "public")))

const posts =[
    {
        username: "Durvesh-Kumar",
        content : "I Love Coding",
    },
    {
        username: "Arvesh-Kumar",
        content : "He  Love tesing",
    },
    {
        username: "Sandeep-Kumar",
        content : "He is Love Farming",
    }
]

app.get("/", (req, res)=>{
    res.send("port is good working")
})

app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts})
})


app.listen(port, ()=>{
    console.log(`Welcome to the port ${port}`);
})