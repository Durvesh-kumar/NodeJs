/*
Create id for Posts

UUID package

Universally unique identifier


npm install uuid

*/

const express = require('express');
const app = express();
const path = require('path');


const { v4: uuidv4} = require('uuid')

const port = 4533;

app.use(express.urlencoded({extended: true}));
app.set('views engine', 'ejs');
app.set(path.join('views', __dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

const presons = [
    { id:uuidv4(),username : 'Duevesh Kumar', contents: 'I love coding'}
];

app.get('/posts', (req, res)=>{
    res.render('index.ejs', {presons})
});
app.get('/posts/new', (req, res)=>{
    res.render('form.ejs');
});

app.post('/posts', (req, res)=>{
    let {username, contents} = req.body;
    let id = uuidv4()
    presons.push({ id, username, contents});
    res.redirect('/posts')
});
app.get('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let post = presons.find((e)=> id === e.id);
    res.render('show.ejs', {post})
})

app.get('/', (req, res)=>{
    res.send(`http://localhost:${port}/posts`);
});






app.listen(port, ()=>{
    console.log(`http://localhost:${port}/posts`);
})
