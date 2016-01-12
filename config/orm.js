var  mysqlAdapter = require('sails-mysql');

module.exports = {
  adapters: {
      'default': mysqlAdapter
  },
  connections: {
      mysql: {
          adapter   : 'default',
          module    : 'sails-mysql',
          host      : 'localhost',
          port      : 3306,
          user      : 'root',
          password  : 'root',
          database  : 'express'
          }
  }  
};