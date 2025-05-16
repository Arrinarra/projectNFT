const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './dev.sqlite', // Путь к файлу БД
});

module.exports = sequelize;