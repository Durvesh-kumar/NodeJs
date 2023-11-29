const exp = require('constants');
const express = require('express');

const app = express();

const port = 3434;

app.use(express.urlencoded({extended: true}));
const path = require('path')
app.set("views engine", 'ejs')

app.set('views', path.join(__dirname, 'views'))
app.use(express.static((path.join(__dirname, 'public'))));


app.get('/', (req, res)=>{
    res.send('server is good woring')
})



app.listen(port, ()=>{
    console.log(`Welcome to port ${port}`);
})