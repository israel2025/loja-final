const path = require('path');
const { readJSON } = require('../utils/fileDb');
const productsFile = path.join(__dirname, '..', '..', 'data', 'products.json');

function listProducts(req, res) {
  const products = readJSON(productsFile);
  res.json(products);
}

module.exports = { listProducts };
