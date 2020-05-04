const MongoClient = require('mongodb');
const { Schema } = require('mongoose');
const Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;
const url =  'mongodb+srv://shyam:dalda3327@makeiteasy-demo-cf6k4.mongodb.net/user';


let reguserSchema = Schema({
    userId:String,  
    password:String
},{ collection: "registeredUser"}) ;

let collection = {};
collection.getUserCollection = () => Mongoose.connect(url, 
    { useNewUrlParser:true}).then((database) => database.model('registeredUser',reguserSchema)).catch((error)=>{
        let err = new Error("Could not connect Database");
        err.status = 500;
        throw err;
    })
module.exports = collection;