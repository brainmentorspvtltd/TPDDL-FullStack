const User = require("../models/user");
const passwordHashing = require("../../utils/passwordhashing");
const userOperations = {
    add(userObject){
        var hash =  passwordHashing.encrypt(userObject.password);
        userObject.password = hash;
        //pr.then()
        return User.create(userObject);
            /*User.create(userObject).then(result=>{
            //console.log("Record Added :::: ");
        }).catch(err=>{
            console.log("Error During Record Add ",err);
        })*/
        // User.sync({force: true}).then(() => {
        //     // Table created
        //     User.create(userObject).then(result=>{
        //         console.log("Record Added ",result);
        //     }).catch(err=>{
        //         console.log("Error During Add ",err);
        //     })
        //   });
        
    },
    find(userObject,response,request){
        //User.findAll({where:{userid:userObject.userid,password:userObject.password}}).then(result=>{
            User.findAll({where:{userid:userObject.userid}}).then(result=>{
            if(result.length>0){
                console.log("Result IS ",result[0].dataValues);
                let dbPassword = result[0].dataValues.password;
                let isCompare = passwordHashing.compare(userObject.password,dbPassword);
                //;
                console.log("User Exist ",result[0].dataValues.password);
                if(isCompare){
                    console.log("Session ID FOR ",userObject.userid," Session ID ",request.session.id )
                    request.session.uid = userObject.userid;
                    response.render('users/dashboard',{'user':request.session.uid});
                }
                else{
                    console.log("User Password Not Exist");
                response.send('Invalid Userid or Password');
                }
                
                //response.send('Welcome '+userObject.userid);
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