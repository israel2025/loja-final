const express = require('express');
const router = express.Router();
const { User, Vendor, Withdrawal } = require('../models');
const auth = require('../middlewares/authMiddleware');
const adminAuth = require('../middlewares/adminAuth');

// simple admin endpoints
router.get('/users', auth, adminAuth, async (req, res, next) => {
  try { const users = await User.findAll(); res.json(users); } catch (err) { next(err); }
});

router.get('/vendors', auth, adminAuth, async (req, res, next) => {
  try { const vendors = await Vendor.findAll(); res.json(vendors); } catch (err) { next(err); }
});

router.post('/vendor/:id/approve', auth, adminAuth, async (req, res, next) => {
  try {
    const v = await Vendor.findByPk(req.params.id);
    if (!v) return res.status(404).json({ message: 'Vendor not found' });
    v.approved = true; await v.save(); res.json(v);
  } catch (err) { next(err); }
});

router.get('/withdrawals', auth, adminAuth, async (req, res, next) => {
  try { const w = await Withdrawal.findAll(); res.json(w); } catch (err) { next(err); }
});

module.exports = router;
