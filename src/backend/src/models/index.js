const sequelize = require('../config/db');

require('./User');
require('./Product');
require('./Order');
require('./Withdraw');
require('./Vendor');

sequelize.sync({ alter: true })
  .then(() => console.log("SQLite sincronizado com sucesso!"))
  .catch(err => console.error("Erro ao sincronizar:", err));

module.exports = sequelize;
