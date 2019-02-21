const seq = require("sequelize");
const connection = require("../connection");
const Right = require("./RightSchema");
const Role = connection.define('roles',{
    'roleid':{type:seq.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
    'name':{type:seq.STRING,allowNull:false,unique:true},
    'desc':seq.STRING,
    'status':{type:seq.CHAR(1),defaultValue:'A'}
});
Role.belongsToMany(Right,{ 
    onDelete: 'CASCADE',
    through: 'rolerightmapping'
  });
module.exports = Role;