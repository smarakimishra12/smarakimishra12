const express = require('express'); 
const app = express();
const myerrlog = require('./utilities/errloger')
const route = require('./routes/routing');
const bodyParser = require('body-parser'); 
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use('/reguser',route);

app.listen(3000, () => {
    console.log("server running @3000") 
})
