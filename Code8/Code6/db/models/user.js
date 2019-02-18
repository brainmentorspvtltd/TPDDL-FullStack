const Sequelize = require("sequelize");
const connection = require("../connection");
const User = connection.define('users',{
    id:{type:Sequelize.INTEGER,autoIncrement:true,
    allowNull:false,primaryKey:true
    },
    userid:{type:Sequelize.STRING,allowNull:false,unique:true},
    password:{type:Sequelize.STRING}
    });

    
    module.exports = User;