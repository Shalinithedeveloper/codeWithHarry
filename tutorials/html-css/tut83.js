show dbs
use ShaliniKart
show collections

db.items.find({price: {$lt:100000}})

//deleting OItems from mongo database
db.items.deleteOne({price: {$lt:100000}})
//deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price: {$lt:100000}})