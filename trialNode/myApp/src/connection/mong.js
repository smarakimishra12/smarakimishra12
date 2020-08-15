const MongoClient = require('mongodb');
const { Schema } = require('mongoose');
const Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;
const url =  'mongodb+srv://shyam:dalda3327@makeiteasy-demo-cf6k4.mongodb.net/user';
const url1=  'mongodb+srv://shyam:dalda3327@makeiteasy-demo-cf6k4.mongodb.net/Trial';


let reguserSchema = Schema({
    userId:String,  
    password:String,
    username:String,
},{ collection: "registeredUser"}) ;

let trialSchema = Schema({
    _id:Number,
    title:String,  
    author:String,
    copies:Number,
},{ collection: "first"}) ;

let collection = {};
collection.getUserCollection = () => Mongoose.connect(url, 
    { useNewUrlParser:true, useUnifiedTopology: true}).then((database) => database.model('registeredUser',reguserSchema)).catch((error)=>{
        let err = new Error("Could not connect Database");
        err.status = 500;
        throw err;
    })
collection.getTrialCollection = () => Mongoose.connect(url1, 
    { useNewUrlParser:true, useUnifiedTopology: true}).then((database) => database.model('first',trialSchema)).catch((error)=>{
        let err = new Error("Could not connect Database");
        err.status = 500;
        throw err;
    })
module.exports = collection;