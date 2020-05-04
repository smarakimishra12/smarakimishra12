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
// userservice.fetchReguser().then(dt=>{
//     console.log(dt)
// })
module.exports = userservice;