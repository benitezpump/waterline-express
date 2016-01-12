var Waterline = require('waterline');
var config = require('../config/models');

module.exports = Waterline.Collection.extend({
    tableName: 'user',
    connection: config.connection,
    migrate: config.migrate,
    attributes: {
        user: 'string',
        password: 'string'
    }   
});