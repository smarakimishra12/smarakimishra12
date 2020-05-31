 const express = require('express'); 
const app = express();
const myerrlog = require('./utilities/errloger')
const route = require('./routes/routing');
const routetoAddUser = require('./routes/adduser');
const bodyParser = require('body-parser'); 
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/reguser',route);
app.use('/regnewuser',routetoAddUser);

app.listen(3000, () => {
    console.log("server running @3000") 
})
