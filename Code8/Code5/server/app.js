const express = require("express");
const bodyParser = require("body-parser");
//console.log("What is Express ",typeof express);
const app = express();
//console.log("Middleware ",express.static("public"));
app.use(express.static("public"));  // req, res , next

app.use(bodyParser.urlencoded({extended:false}));
//city=[Delhi,Mumbai]&pincode=110007

app.use(require("./cors"));
app.get('/getxml',(req,res)=>{
    const path = require("path");
    const xmlPath = path.join(__dirname,"docs/note.xml");
    const fs = require("fs");
    const stream = fs.createReadStream(xmlPath);
    stream.pipe(res);
})
app.get('/userinfo/:userid?',(req,res)=>{
    console.log('Userid Rec ',req.params.userid);
    var userid = req.params.userid;
    const userOpr = require("./models/UserOperations");
    var users = userOpr.fillUsers();
    if(userid){
        users = userOpr.filter(userid);
    }
    const usersData = {"users":users};
    res.json(usersData);
})

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
app.use(require("./notfound"));
//console.log("What is App ",typeof app);
app.listen(process.env.PORT||1234,()=>{
    console.log("Server Start...");
})