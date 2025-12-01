const express = require('express');
const router = express.Router();
const { list, get, create } = require('../controllers/productController');
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/multerUpload');

router.get('/', list);
router.get('/:id', get);
router.post('/', auth, upload.single('image'), create);

module.exports = router;
