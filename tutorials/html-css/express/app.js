const express = require('express')

const app = express();
const port = 80;

app.get("/", (req, res)=>{
    res.send("this is home page of my first express app with harry")
})

app.get("/about", (req, res)=>{
    res.send("this is about page of my first express app with harry")
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})