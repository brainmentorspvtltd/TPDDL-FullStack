const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use('/',require("./api/productRoutes"));
app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('Server Start');
    }
})