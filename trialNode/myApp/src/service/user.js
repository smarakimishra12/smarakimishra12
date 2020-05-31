const userDb = require('../model/user');

const userservice = {}
userservice.fetchReguser = () => {
    return userDb.findUser().then(data => {
        if(data) {
            return data;
        }
        else {
            let err = new Error("Could not find registered user");
            err.status = 400;
            throw err;
        } 
    })
}
userservice.addReguser = (data) => {
    console.log(data);
    return userDb.addUser(data).then(data1 => {
        console.log(data1)
        if(data1 === 'added') {
            return data1;
        }
        else {
            let err = new Error("Could not register the user");
            err.status = 400;
            throw err;
        }
    })
}
userservice.findUser = (data) => {
    return userDb.findUser(data).then(data1 => {
            return data1;
            })
    }
// userservice.fetchReguser().then(dt=>{
//     console.log(dt)
// })
//  user = {
//     'userId':'smaraki@abc.com' ,
//    'password':'smaraki',
//     'username':'smaraki'
//  }
//  userservice.addReguser(user).then(dt=> {
//      console.log(dt);
//  }) 
module.exports = userservice;