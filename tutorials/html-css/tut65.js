// synchronous or blocking
// line by line execution


// Asynchronous or non-blocking
// Line by line execution not guaranteed
const fs = require('fs');
let text = fs.readFile('dele.txt', 'utf-8', (a, b)=>{
    console.log(a, b)
});
console.log('this is a message')