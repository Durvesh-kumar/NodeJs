const express = require('express');
const app = express();
const port = 4348;
const path = require('path');
const {v4: uuidv4} = require('uuid');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: true}));

app.set('views engine', 'ejs');
app.set(path.join('views', __dirname, 'views'));

const posts =[
    { id: uuidv4(), username: 'Durvesh kumar', content: 'I love coding'},
];

app.get('/posts', (req,res)=>{
    res.render('index.ejs', {posts})
});

app.get('/posts/new', (req, res)=>{
    res.render('form.ejs')
});

app.post('/posts', (req, res)=>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect('/posts')
});

app.get('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let post = posts.find((e)=> id === e.id)
    res.render('show.ejs', {post})
});


app.patch('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((e)=> id === e.id);
    post.content = newContent;
    res.redirect('/posts')
})
app.get('/posts/:id/edit', (req, res)=>{
    let {id} = req.params;
    let post = posts.find((e)=> id === e.id);
    res.render('edit.ejs', {post});
});

app.delete('/posts/:id', (req, res)=>{
    let {id}= req.params;
    posts = posts.filter((e)=> id !== e.id);
    res.redirect('/posts')
})



app.listen(port, ()=>{
    console.log(`http://localhost:${port}/posts`);
})