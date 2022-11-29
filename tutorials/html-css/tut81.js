// Inserting Data in mongo db
use ShaliniKart
db.items.insertOne({name:"Oppo F19", price: 16000, rating: 4.9, qty: 200, sold: 100})

db.items.insertMany([{name:"Oppo F19", price: 16000, rating: 4.9, qty: 200, sold: 100}, {name:"Oppo 12plus", price: 10000, rating: 2.9, qty: 150, sold: 50}, {name:"IPhone 14 Pro Max", price: 1500000, rating: 5.0, qty: 15000, sold: 13000}])