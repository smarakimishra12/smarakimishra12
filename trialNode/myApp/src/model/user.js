const connection = require("../connection/mong");    
let driver = {};
driver.findUser = () => {
        return connection.getUserCollection().then(model =>{
            return model.find({},{_id:0,Users:1}).then(ids=>{
                return ids;
            })
        })
};
// driver.findUser().then(dt=>{
//    dt.forEach(a=>{
//        console.log(a);
       
//    })
// })
module.exports = driver; 