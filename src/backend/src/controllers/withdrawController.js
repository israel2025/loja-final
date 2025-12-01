const { Withdrawal, Vendor } = require('../models');

const requestWithdrawal = async (req, res, next) => {
  try {
    const vendorId = req.body.vendorId || req.user?.id;
    const amount = parseFloat(req.body.amount);
    if (!amount || amount <= 0) return res.status(400).json({ message: 'Invalid amount' });
    const w = await Withdrawal.create({ amount, fee: 5.0, vendorId });
    res.json(w);
  } catch (err) { next(err); }
};

const listWithdrawals = async (req, res, next) => {
  try {
    const items = await Withdrawal.findAll({ order: [['id','DESC']] });
    res.json(items);
  } catch (err) { next(err); }
};

module.exports = { requestWithdrawal, listWithdrawals };
