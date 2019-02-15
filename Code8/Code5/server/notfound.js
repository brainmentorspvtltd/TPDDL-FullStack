const notFound = (req,res,next)=>{
    const path = require("path");
    const fullPath =path.join(__dirname,'public/error.html');
    res.sendFile(fullPath);
    //res.send('OOPS U Type Something Wrong.....');
}
module.exports = notFound;