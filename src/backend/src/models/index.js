const { Sequelize } = require('sequelize');
const { sequelize } = require('../config/db');

const User = require('./User')(sequelize);
const Vendor = require('./Vendor')(sequelize);
const Product = require('./Product')(sequelize);
const Order = require('./Order')(sequelize);
const Withdrawal = require('./Withdrawal')(sequelize);

// Associations
Vendor.hasMany(Product, { foreignKey: 'vendorId' });
Product.belongsTo(Vendor, { foreignKey: 'vendorId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Vendor.hasMany(Withdrawal, { foreignKey: 'vendorId' });
Withdrawal.belongsTo(Vendor, { foreignKey: 'vendorId' });

module.exports = {
  sequelize,
  User,
  Vendor,
  Product,
  Order,
  Withdrawal
};
