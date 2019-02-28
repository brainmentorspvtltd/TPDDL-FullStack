const jwt = require("jsonwebtoken");
function generateToken(userid){
    var token = jwt.sign(userid, 'thisisthesecret');
    return token;
}
module.exports = generateToken;
var t = generateToken("amit");
var t = generateToken("ram");
console.log("T is ",t);