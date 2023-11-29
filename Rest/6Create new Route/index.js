/*

Implement : POST/posts 
create route

 POST  /posts  to add a new post 

 2routes 
   => Erver the form     GET    /posts/new 
   => Add the new post   POST   /posts


   redirect
*/

const { log } = require('console');
const express = require('express');
const app = express();
const port = 3553;
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const persons = [
    {
        username: "Durvesh Kumar",
        content: "I Love Coding"
    },
    {
        username: "Arvesh Kumar",
        content: "I Love Testing"
    },
    {
        username: "Sandeep Kumar",
        content: "I Love Farming"
    },
    {
        username: "Daveinder shing",
        content: "I Love Sleeping"
    }
]

app.get('/', (req, res)=>{
    res.send(`Welcome to the new port ${port}`)
});

app.get('/posts', (req, res)=>{
    res.render("index.ejs", {persons})
})

app.get('/posts/new', (req, res)=>{
    res.render('form.ejs')
})
app.post('/posts', (req, res)=>{
    let{username, content, pass}= req.body;
    persons.push({username, content})
    res.redirect("/posts")
})
app.listen(port, ()=>{
    console.log(`Welcome to the Port ${port}`);
});