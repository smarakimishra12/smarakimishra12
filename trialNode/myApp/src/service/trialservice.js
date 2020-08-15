const model =  require('../model/trialmodel');
const service = {}
service.fetchcollection = () => {
    return model.findUser().then(data => {
        if(data) {
            return data;
        }
        else {
            let err = new Error("Could not find registered collection");
            err.status = 400;
            throw err;
        } 
    })
}

service.fetchcollection().then(d=>{
    d.forEach(a=>{
        console.log(a);
    })
})
module.exports = service;