const express = require('express');
const router = express.Router();
const { requestWithdrawal, listWithdrawals } = require('../controllers/withdrawController');
const auth = require('../middlewares/authMiddleware');
const adminAuth = require('../middlewares/adminAuth');

router.post('/', auth, requestWithdrawal);
router.get('/', auth, adminAuth, listWithdrawals);

module.exports = router;
