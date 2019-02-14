const express = require("express");
const bodyParser = require("body-parser");
//console.log("What is Express ",typeof express);
const app = express();
//console.log("Middleware ",express.static("public"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
//city=[Delhi,Mumbai]&pincode=110007

app.post('/login',(req,res)=>{
if(req.body.userid == req.body.pwd){
    res.send('Welcome '+req.body.userid);
}
else{
    res.send('Invalid Userid or Password');
}
});

app.get('/login',(req,res)=>{
    console.log("Query is ::::",req.query);
    if(req.query.userid==req.query.pwd){
        res.send('Welcome '+req.query.userid);
    }
    else{
        res.send('Invalid Userid or Password');
    }
})
//console.log("What is App ",typeof app);
app.listen(process.env.PORT||1234,()=>{
    console.log("Server Start...");
})