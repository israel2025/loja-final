const sequelize = require('./src/models');

sequelize.authenticate()
  .then(() => console.log("Banco SQLite conectado!"))
  .catch(err => console.log("Erro SQLite:", err));
