/**
 * Created by jose on 5/9/14.
 */

db.orderarchive.remove({});
db.orderarchive.insert(
{
    "name" : "Me",
    "order" : "lasagna"
},
{
    "name" : "Jose",
    "order" : "Huevos Rancheros"
},
{
    "name" : "Taylor",
    "order" : "Pepperoni Pizza"
},
{
    "name" : "Bill",
    "order" : "Orange Chicken"
},
{
    "name" : "Sean",
    "order" : "Pho"
},
{
    "name" : "Peter",
    "order" : "Chicken Shish"
});
db.orderarchive.find().pretty();