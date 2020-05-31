const connection = require("../connection/mong");    
let driver = {};
driver.findUser = () => {
        return connection.getUserCollection().then(model =>{
            return model.find({},{_id:0,Users:1}).then(ids=>{
                return ids;
            })
        })
};
driver.addUser = (data) => {
    return connection.getUserCollection().then(model => {
        return model.create(data)
        .then((udata) => {
            console.log(udata)
            if (udata != undefined ) {
                console.log('added');
                return 'added'
            }
            else {
                console.log('not added');
            }
        });
    })

}
driver.findUser = (data) => {
    return connection.getUserCollection().then(model => {
        return model.find(data)
        .then((udata) => {
                if(udata != [])
                {
                    return true;
                }
                return false;
            });
        });
    }
user = {
    'userId':'smaraki@abc.com' ,
    'password':'smaraki',
    'username':'smaraki'
}
// driver.addUser(user).then(dt=>{
//     dt.forEach(a=>{
//         console.log('nnm');
        
//     })
//  })
module.exports = driver; 