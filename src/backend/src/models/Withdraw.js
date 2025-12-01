const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Withdrawal = sequelize.define('Withdrawal', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    fee: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 5.0 },
    status: { type: DataTypes.ENUM('pending','paid','rejected'), defaultValue: 'pending' },
    vendorId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
  }, {
    tableName: 'withdrawals'
  });

  return Withdrawal;
};
