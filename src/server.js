require('dotenv').config()
const express = require("express");
const { database } = require('./config/constants.js');
let app = express();

const sequelize = require("./config/database.js")
sequelize.authenticate()
    .then((_) => console.log('Connection has been established successfully.'))
    .catch ((error) => console.error('Unable to connect to the database:', error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`server listening on port ${PORT}!`);
});

const Liquibase = require('node-liquibase').Liquibase;
const POSTGRESQL_DEFAULT_CONFIG = require('node-liquibase').POSTGRESQL_DEFAULT_CONFIG;

const myConfig = {
    ...POSTGRESQL_DEFAULT_CONFIG,
    changeLogFile: './src/db/postgresql/changelog.yml',
    url: `jdbc:postgresql://${database.host}:5432/${database.name}`,
    username: database.user,
    password: database.password,
}
const instTs = new Liquibase(myConfig);

instTs.status();
instTs.update();