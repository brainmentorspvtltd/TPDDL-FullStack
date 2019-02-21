const seq = require("../connection.js");
const loader = require("../../utils/loadmodels");
loader();
const User = require("../models/UserSchema");
const Group = require("../models/GroupSchema");
//const Role = require("../models/RoleSchema");
//const Right = require("../models/RightSchema");
const joinOperations = {
    add(user){
       console.log("User is ",user);
       User.create({
           'userid':user.userid,
           'password':user.password,
           'groups':{
              'name':'ADMIN',
              'desc':'I am Admin' 
           }
       },{include:[Group]}).then(()=>{
          console.log("Record Added.....");
       }).catch(err=>{
          console.log("Error is ",err);
       });
       
    },
    find(user){
       User.findAll({where:{'userid':user.userid},include:[Group]}).then(result=>{
          console.log("FOUND >>>>> ",result[0].dataValues.groups);
       }).catch(err=>{
          console.log("Error in Find ",err);
       })
        /*
        User.findAll({ include: [{ association: 'Instruments' }] }).then(
        */
        /*
        Posts.findAll({
  include: [{
    model: User,
    where: {year_birth: 1984}
    required: false,
   }]
}).then(posts => {
 
});
 */   
    }
}
// Test
//joinOperations.add({'userid':'amit','password':'12345'}) 
joinOperations.find({'userid':'amit'});
module.exports = joinOperations;