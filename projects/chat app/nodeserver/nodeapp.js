//node server which will handle socket io connections
// const express = require('express')
const socketiopackage = require('socket.io')
const port = 5000
const io = new socketiopackage.Server(5000,{cors: {"Access-Control-Allow-Origin": "*",methods: ["GET", "POST", "OPTIONS"]},})
var users = {}

io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        console.log("new user", name)
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message =>{
        socket.broadcast.emit('recieve', {message: message, name: users[socket.id]})
    });

    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
})