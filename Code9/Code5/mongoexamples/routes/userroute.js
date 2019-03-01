const userRoute = require("express").Router();
const tokenFn = require("../utils/token");
userRoute.post('/login',(req, res)=>{
    console.log("Inside Post Login ",req.body);
    if(req.body.userid == req.body.pwd){
    res.status(200).json({token:tokenFn(req.body.userid),"msg":'Welcome '+req.body.userid});
    }
    else{
        res.status(404).json({"msg":"Invalid Userid or Pwd"});
    }
})
module.exports = userRoute;