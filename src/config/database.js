const { Sequelize } = require('sequelize');
const { database } = require('./constants');

// Option 3: Passing parameters separately (other dialects)
module.exports = new Sequelize(database.name, database.user, database.password, {
    host: database.host,
    dialect: 'postgres'
});

