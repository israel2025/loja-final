const express = require('express');
const router = express.Router();
const { registerVendor, vendorProducts } = require('../controllers/vendorController');
const auth = require('../middlewares/authMiddleware');

router.post('/register', auth, registerVendor);
router.get('/:vendorId/products', vendorProducts);

module.exports = router;
