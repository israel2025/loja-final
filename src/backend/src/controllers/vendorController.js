const { Vendor, Product } = require('../models');

const registerVendor = async (req, res, next) => {
  try {
    const { name, cpf, cep } = req.body;
    if (!name || !cpf) return res.status(400).json({ message: 'Missing fields' });
    const vendor = await Vendor.create({ name, cpf, cep, userId: req.user?.id || null, approved: false });
    res.json(vendor);
  } catch (err) { next(err); }
};

const vendorProducts = async (req, res, next) => {
  try {
    const vendorId = req.params.vendorId || req.user?.id;
    const products = await Product.findAll({ where: { vendorId } });
    res.json(products);
  } catch (err) { next(err); }
};

module.exports = { registerVendor, vendorProducts };
