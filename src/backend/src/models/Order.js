const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Order = sequelize.define('Order', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    total: { type: DataTypes.FLOAT, allowNull: false },
    status: { type: DataTypes.ENUM('pending','paid','shipped','completed','cancelled'), defaultValue: 'pending' },
    userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    data: { type: DataTypes.JSON, allowNull: true }
  }, {
    tableName: 'orders'
  });

  return Order;
};
