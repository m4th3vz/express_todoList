// config/database.js

// O arquivo configura o Sequelize para usar o SQLite como banco de dados
// Armazenando os dados em ./database.sqlite.

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

module.exports = sequelize;
