// Searching for Data in mongo db
use ShaliniKart

//This query will return all the objects with rating equal to 4.9
db.items.find({rating:4.9})
db.items.find({rating:{$gte:2.9}})
db.items.find({rating:{$gt:2.9}})
//And Operator
db.items.find({rating:{$gt:2.9}, price:{$gt:100000}})

db.items.find({rating:{$gt:2.9}, price:{$lt:100000}})

db.items.find({$or:[{rating:{$gt:2.9}}, {price:{$gt:100000}}]}) 