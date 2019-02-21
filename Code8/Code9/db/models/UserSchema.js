const seq = require("sequelize");
const connection = require("../connection");
const Group = require("./GroupSchema");
const User = connection.define('users',{
    'uid':{type:seq.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
    'userid':{type:seq.STRING,allowNull:false,unique:true},
    'password':seq.STRING,
    'status':{type:seq.CHAR(1),defaultValue:'A'}
}
    );
User.belongsToMany(Group,{ 
    onDelete: 'CASCADE',
    through: 'usergroupmapping'
  });
module.exports = User;