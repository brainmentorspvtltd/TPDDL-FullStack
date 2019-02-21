const seq = require("../db/connection");
const User = require("../db/models/UserSchema");
const Group = require("../db/models/GroupSchema");
//const Role = require("../db/models/RoleSchema");
//const Right = require("../db/models/RightSchema");
function load(app){
seq.sync({force:false}).then((result)=>{
    console.log("All Tables are Created ");
    if(app){
    app.listen(process.env.PORT || 1234,()=>{
        console.log("Server Started 1234");
    })
}
}).catch(err=>{
    console.log('Error During Sync ',err);
})
}
module.exports = load;