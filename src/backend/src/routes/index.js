const express = require('express');
const router = express.Router();

const auth = require('./auth.routes');
const products = require('./product.routes');
const vendor = require('./vendor.routes');
const admin = require('./admin.routes');
const withdrawal = require('./withdraw.routes');

router.use('/auth', auth);
router.use('/products', products);
router.use('/vendor', vendor);
router.use('/admin', admin);
router.use('/withdraw', withdrawal);

module.exports = router;
