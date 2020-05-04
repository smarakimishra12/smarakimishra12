const connection = require("../connection/mong");    
let driver = {};
driver.findUser = () => {
        return connection.getUserCollection().then(model =>{
            return model.find().then(ids=>{
                return ids;
            })
        })
};
// driver.findUser().then(dt=>{
//     console.log(dt)
// })
module.exports = driver; 