const bcrypt = require("bcrypt");
const encryptObj = {
     saltRounds : 10,
 compare(plainPassword,hashPassword){
    return bcrypt.compareSync(plainPassword, hashPassword);
    //  var pr = new Promise((resolve, reject)=>{
    //     bcrypt.compare(plainPassword, hashPassword, function(err, res) {
    //             if(err){
    //                 reject(err);
    //             }
    //             else{
    //                 resolve(res);
    //             }
    //             // res == true
    //     });
    //  })
    // return pr;
 },   
 encrypt(pwd){
    //var pr = new Promise((resolve, reject)=>{

    
    
    var salt = bcrypt.genSaltSync(this.saltRounds);
    var hash = bcrypt.hashSync(pwd, salt);
    return hash;
    //bcrypt.genSalt(saltRounds, function(err, salt) {
   /* bcrypt.hash(pwd, salt, function(err, hash) {
        if(err){
            reject(err);
        }
        else{
        resolve(hash);
        }
   // });
//});
}); */
//return pr;
}
}
module.exports = encryptObj;