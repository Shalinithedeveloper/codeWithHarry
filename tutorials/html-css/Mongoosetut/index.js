// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ShaliniKart', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    //we're connected!
    console.log('we are connected bro')
});

var kittySchema = new mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var shaliniKitty = new Kitten({ name: "shaliniKitty Name"});
console.log(shaliniKitty.name);