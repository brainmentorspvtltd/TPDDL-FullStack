const User = require("../models/user");
const userOperations = {
    add(userObject){
            User.create(userObject).then(result=>{
            console.log("Record Added :::: ");
        }).catch(err=>{
            console.log("Error During Record Add ",err);
        })
        // User.sync({force: true}).then(() => {
        //     // Table created
        //     User.create(userObject).then(result=>{
        //         console.log("Record Added ",result);
        //     }).catch(err=>{
        //         console.log("Error During Add ",err);
        //     })
        //   });
        
    },
    find(userObject,response){
        User.findAll({where:{userid:userObject.userid,password:userObject.password}}).then(result=>{
            if(result.length>0){
               
                console.log("User Exist ");
                response.send('Welcome '+userObject.userid);
            }
            else{
                console.log("User Not Exist");
                response.send('Invalid Userid or Password');
            }
            //console.log("FOUND :::: Result is ",result);
        }).catch(err=>{ 
            console.log("Error is ",err);
            response.send('Error Occur During Login');
        })
    },
    update(){

    },
    remove(){

    }   
}
module.exports = userOperations;