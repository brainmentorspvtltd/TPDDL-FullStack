const User = require("../models/user");
const userOperations = {
    add(userObject){
        User.sync({force: true}).then(() => {
            // Table created
            User.create(userObject).then(result=>{
                console.log("Record Added ",result);
            }).catch(err=>{
                console.log("Error During Add ",err);
            })
          });
        
    },
    find(){

    },
    update(){

    },
    remove(){

    }   
}
module.exports = userOperations;