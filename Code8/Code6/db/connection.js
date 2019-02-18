const Sequelize = require("sequelize");
const configuration = require('../utils/config').db;
const seq  = new Sequelize(configuration.dbName,configuration.userid,configuration.password,{dialect:configuration.dialect,host:configuration.host, port: configuration.port,pool: {
    max: configuration.poolSize,
    idle: 30000,
    acquire: 60000,
  }});
  seq.authenticate().then(()=>{
      console.log("Connection Created SuccessFully ");
  }).catch(err=>{
      console.log('Error in DB Connection ',err);
  })
  module.exports = seq;