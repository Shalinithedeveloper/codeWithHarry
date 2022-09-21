const { application } = require('express');
const express = require('express');
const path = require('path');

const app = express();
const port = 80;

app.use('/static', express.static('static'))

//set the templates engine as pug
app.set('view engine', 'pug')

//set views directory
app.set('views', path.join(__dirname, 'views'))

//our pug demo endpoint
app.get("/demo", (req, res)=>{
res.status(200).render('demo', { title: 'Hey Shalini', message: 'Hello there! and thanks for telling me how to use postman' })
})

app.get("/", (req, res)=>{
    res.send("this is home page of my first express app with harry")
})

app.get("/about", (req, res)=>{
    res.send("this is about page of my first express app with harry")
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})