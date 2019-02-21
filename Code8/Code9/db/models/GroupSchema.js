const seq = require("sequelize");
const connection = require("../connection");
//const Role = require("./RoleSchema");
const Group = connection.define('groups',{
    'groupid':{type:seq.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
    'name':{type:seq.STRING,allowNull:false,unique:true},
    'desc':seq.STRING,
    'status':{type:seq.CHAR(1),defaultValue:'A'}
});
// Group.belongsToMany(Role,{ 
//     onDelete: 'CASCADE',
//     through: 'grouprolemapping'
//   });
module.exports = Group;