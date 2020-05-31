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
        
        return model.insertOne({_id:0,Users:1},{})
        .then((udata) => {
            if (udata.nModified === 1 ) {
                console.log('added');
                return 'added'
            }
            else {
                console.log('not added');
            }
        });
    })

}
driver.findUser().then(dt=>{
   dt.forEach(a=>{
       console.log(a);
       
   })
 })
user = {
    'userId':'smaraki@abc.com' ,
    'password':'smaraki',
    'username':'smaraki'
}
driver.addUser(user).then(dt=>{
    dt.forEach(a=>{
        console.log('nnm');
        
    })
 })
module.exports = driver; 