const express = require('express');
const routing = express.Router();
const reguserservice = require('../service/user');
const userObj = require('../model/userinterface')

//get all the registered user 
routing.get('/', (req, res,next) => {
    reguserservice.fetchReguser().then(data => {
       res.json(data);
}).catch(err => {next(err)});
     }); 

module.exports = routing;
 