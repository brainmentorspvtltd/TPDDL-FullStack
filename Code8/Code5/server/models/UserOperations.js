const User = require("./User");
const userOperations = {
    users:[],
    filter(userid){
        return this.users.filter(user=>user.userid==userid)
    },
    fillUsers(){
        this.users=[];
        for(let i=1;i<=5; i++){
            this.users.push(new User("ram"+i,"Delhi"+i,"222"+i,"ram@gmail.com"))
        }
        return this.users;
    }
}
module.exports = userOperations;