const connection = require("../connection/mong");  
let trial = {};
trial.findUser = () => {
    return connection.getTrialCollection().then(model =>{
        return model.find({},{_id:0,title:1,author:0,copies:0}).then(ids=>{
            return ids;
        })
    })
};

trial.findUser().then(d=>{
    d.forEach(a=>{
        console.log(a);
    })
})

module.exports = trial; 