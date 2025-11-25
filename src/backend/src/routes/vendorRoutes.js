const express = require('express');
const router = express.Router();
const { registerVendor, getVendorByUser } = require('../controllers/vendorController');

router.post('/register', registerVendor);
router.get('/my', getVendorByUser); // ?userId=123

module.exports = router;
