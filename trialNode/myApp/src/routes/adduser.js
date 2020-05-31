const express = require('express');
const routing = express.Router();
const reguserservice = require('../service/user');
const userObj = require('../model/userinterface')

//add all the registered user to db
routing.post('/', (req, res,next) => {
    let UserObj = new userObj(req.body);
    console.log(req);
    reguserservice.addReguser(UserObj).then(data => {
       res.send(data);
}).catch(err => {next(err)});
     });

module.exports = routing;