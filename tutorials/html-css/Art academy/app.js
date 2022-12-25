const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/contactArt', {useNewUrlParser: true});
const port = 8000;

//define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    Phone: String,
    Email: String,
    Address: String,
    desc: String
  });
const contact = mongoose.model('contact', contactSchema);
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params)});
// ENDPOINTS
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params)});


app.post('/contact', (req, res)=>{
    let myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("this Item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("this item was not saved to the database")
    });
    // res.status(200).render('contact.pug')
});

    
// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});