const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 80;

// Express specific stuff
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// Pug specific stuff 
app.set('view engine', 'pug')//set the templates engine as pug
app.set('views', path.join(__dirname, 'views'))//set views directory

// endpoints
app.get('/', (req, res)=>{
    const con = "this is the best content on the internet so far to use it wisely"
    const params = {'title': 'I am the best', "content": con}
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res)=>{
    name = req.body.name
    Age = req.body.Age
    gender = req.body. gender
    more = req.body.more
    let outputToWrite = `the name of the client is ${name}, ${Age} years old, ${gender}, more about him/her: ${more} `
    fs.writeFileSync("output.txt", outputToWrite )
    const params = {'message': 'your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
})

// start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})