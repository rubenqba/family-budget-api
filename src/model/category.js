const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('Category', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parent: DataTypes.BIGINT,
});

module.exports = User;