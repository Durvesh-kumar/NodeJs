/*
Implement : GET/posts/:id

show route

GET  /posts/:id   to get one post (usoing id)
*/




const { log } = require('console');
const express = require('express');


const app = express();

const port = 3453;
const path = require('path');
app.use(express.urlencoded({extended: true}));

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")));
const persons =[
    { id: '1', username: "Durvesh kuamr", contents: "I love Coding"},
];

app.get('/', (req, res)=>{
    res.send(`Welcomse to new port ${port}`)
});


app.get("/posts", (req, res)=>{
    res.render('index.ejs', {persons})
})
app.get("/posts/new", (req, res)=>{
    res.render("form.ejs")
});

app.post("/posts", (req,res)=>{
    let{ username, contents }= req.body;
    persons.push({username, contents})
    res.redirect("/posts");
});
app.get('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let post = persons.find((e)=> id === e.id)
    res.render('show.ejs', {post})
})


app.listen(port, ()=>{
    console.log(`Welcomse to tne Port ${port}`);
});