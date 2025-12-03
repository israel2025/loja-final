const { Sequelize } = require("sequelize");
const path = require("path");

// Caminho do arquivo SQLite
const databasePath = path.join(__dirname, "../../../src/database.sqlite");

// Criar instância do Sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: databasePath,
  logging: false
});

// Exporta CORRETAMENTE
module.exports = sequelize;
