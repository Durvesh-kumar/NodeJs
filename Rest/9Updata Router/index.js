 /*
 Implement: PATCH/posts/:id

 Update Route

 PATCH   /posts/:id    to update specific post



 When will change request . we use 
 method  override

*/


 const express = require('express');
 const app = express();
 const { v4: uuidv4} = require('uuid');

 const methodOverride = require('method-override')

 const port = 4534;

 app.use(methodOverride('_method'))

 const path = require('path');
 app.use(express.urlencoded({extended: true}));
 app.set('views engine', 'ejs');
 app.set*(path.join('views', __dirname, 'views'));

 const posts = [
    { id: uuidv4(), username: 'Durvesh kumar', content: 'I love coding'}
 ]

 app.get('/posts', (req, res)=>{
    res.render('index.ejs', {posts})
 });

 app.get('/posts/new', (req, res)=>{
    res.render('form.ejs')
 });

 app.post('/posts', (req, res)=>{
    let {username, content}= req.body;
    let id = uuidv4();
    posts.push({ id, username, content});
    res.redirect('/posts');
 });

 app.get('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let person = posts.find((e)=> id === e.id);
    res.render('show.ejs', {person})

 });

 app.patch('/posts/:id', (req,res)=>{
    let{id} = req.params;
    let newContent = req.body.content;
    let person = posts.find((e)=> id === e.id);
    person.content = newContent
    console.log(person);
    res.redirect('/posts')
 })

 app.get('/posts/:id/edit', (req, res)=>{
    let{id} = req.params;
    let person = posts.find((e)=> id === e.id);
    res.render('edit.ejs', {person})

 })
 app.listen(port, ()=>{
    console.log(`http://localhost:${port}/posts`);
 })