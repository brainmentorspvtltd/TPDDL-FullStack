const express = require('express');
const userRoute = express.Router();
userRoute.post('/login',(request,response)=>{
var userid = request.body.userid;
var password = request.body.password;
});
userRoute.post('/register',(request,response)=>{

})
userRoute.post('/profile',(request,response)=>{
    
})
userRoute.post('/passwordchange',(request,response)=>{
    
})
userRoute.post('/accountdelete',(request,response)=>{
    
})
module.exports = userRoute;
