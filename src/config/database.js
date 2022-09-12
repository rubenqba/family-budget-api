const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('family-budget', 'budget', 'password', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

export.modules =  new Sequelize('sqlite::memory:');