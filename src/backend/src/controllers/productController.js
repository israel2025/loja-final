const { Product } = require('../models');

const list = async (req, res, next) => {
  try {
    const items = await Product.findAll({ order: [['id','DESC']], limit: 200 });
    res.json(items);
  } catch (err) { next(err); }
};

const get = async (req, res, next) => {
  try {
    const p = await Product.findByPk(req.params.id);
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json(p);
  } catch (err) { next(err); }
};

const create = async (req, res, next) => {
  try {
    const { title, description, price, stock } = req.body;
    const product = await Product.create({ title, description, price, stock, image: req.file ? `/uploads/${req.file.filename}` : null, vendorId: req.user && req.user.role === 'vendor' ? req.user.id : null });
    res.json(product);
  } catch (err) { next(err); }
};

module.exports = { list, get, create };
