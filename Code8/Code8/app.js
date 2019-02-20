const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
//app.set('views','./template');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./routes/user'));
app.use('/products',require('./routes/product'));
app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('Server Started At 1234');
    }
})