const express = require('express');
const userOperations = require("../db/helpers/useroperations");
const User = require("../models/User");
const userRoute = express.Router();
userRoute.post('/login',(request,response)=>{
var userid = request.body.userid;
var password = request.body.password;
var userObject = new User(userid, password); 
userOperations.find(userObject,response);
});
userRoute.post('/register',(request,response)=>{
var userid = request.body.userid;
var password = request.body.password;
var userObject = new User(userid, password); 
var pr = userOperations.add(userObject);
pr.then(()=>{
response.send('Register SuccessFully');
}).catch(err=>{
response.send('Unable to Register');
console.log('Error in Register ',err);
})
})
userRoute.post('/profile',(request,response)=>{
    
})
userRoute.post('/passwordchange',(request,response)=>{
    
})
userRoute.post('/accountdelete',(request,response)=>{
    
})
module.exports = userRoute;
