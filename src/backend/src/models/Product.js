const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    price: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    image: { type: DataTypes.STRING, allowNull: true },
    vendorId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: true }
  }, {
    tableName: 'products'
  });

  return Product;
};
