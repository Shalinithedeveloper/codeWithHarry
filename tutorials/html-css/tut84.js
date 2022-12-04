show dbs
use ShaliniKart
show collections

db.items.find()
db.items.updateOne({name: "Oppo F19"},{$set:{Price:2}})
db.items.find()
db.items.updateMany({name: "Oppo F19"},{$set:{Price:3, rating: 1}})