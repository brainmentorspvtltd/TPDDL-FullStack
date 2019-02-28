const userRoute = require("express").Router();
const tokenFn = require("../utils/token");
userRoute.post('/login',(req, res)=>{

    res.json({token:tokenFn(req.body.userid)});
})
module.exports = userRoute;