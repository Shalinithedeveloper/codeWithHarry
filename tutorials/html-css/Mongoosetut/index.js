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

kittySchema.methods.speak = function speak() {
    var greeting = "My name is " + this.name
    console.log(greeting);
  };

var Kitten = mongoose.model('shaliniKitty', kittySchema);

var shaliniKitty = new Kitten({ name: "shaliniKitty "});
// console.log(shaliniKitty.name);
// shaliniKitty.speak();

shaliniKitty.save(function (err, shaliniKitty){
    if (err) return console.error(err);
    shaliniKitty.speak();
});