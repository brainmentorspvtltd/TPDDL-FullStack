const seq = require("sequelize");
const connection = require("../connection");
const Rights = connection.define('rights',{
    'rightid':{type:seq.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
    'name':{type:seq.STRING,allowNull:false,unique:true},
    'desc':seq.STRING,
    'screen':seq.STRING,
    'status':{type:seq.CHAR(1),defaultValue:'A'}
});
module.exports = Rights;