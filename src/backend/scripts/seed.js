/**
 * Simple seed that creates admin user, a vendor and 200 products
 */
require('dotenv').config();
const faker = require('faker');
const { sequelize } = require('../src/config/db');
const { User, Vendor, Product } = require('../src/models');

(async () => {
  try {
    await sequelize.sync({ alter: true });

    // create admin
    const adminExists = await User.findOne({ where: { email: 'israeldofuturo@outlook.com' } });
    if (!adminExists) {
      await User.create({ name: 'Admin', email: 'israeldofuturo@outlook.com', password: 'Rodrigoeseufilho', role: 'admin' });
      console.log('Admin created');
    }

    // create vendor user
    const vendorUser = await User.create({ name: 'Vendor User', email: 'vendor@prime.com', password: '', role: 'vendor' });
    const vendor = await Vendor.create({ name: 'Loja do Vendedor', cpf: '', userId: vendorUser.id, approved: true });

    // create products
    const products = [];
    for (let i = 0; i < 200; i++) {
      products.push({
        title: `Produto ${i+1} - ${faker.commerce.productName()}`,
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
        stock: Math.floor(Math.random() * 100),
        image: null,
        vendorId: vendor.id
      });
    }
    await Product.bulkCreate(products);
    console.log('200 products created');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
