const express = require('express');
const productRoute = express.Router();
productRoute.get('/shoes',(req,res)=>{
    if(req.session && req.session.uid){
        res.send('Welcome '+req.session.uid+'Shoes are ');
    }
    else{
        /*const path = require("path");
        const mainPath = path.normalize(__dirname+"/..");
        const loginPath = path.join(mainPath,"public/login.html");
        response.sendFile(loginPath);*/
        res.redirect('/loadlogin');
    }
})
productRoute.post('/add',(request,response)=>{

});
productRoute.post('/delete',(request,response)=>{

})
productRoute.post('/search',(request,response)=>{
    
})
productRoute.post('/update',(request,response)=>{
    
})
productRoute.post('/all',(request,response)=>{
    
})
module.exports = productRoute;
