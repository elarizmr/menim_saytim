const express = require('express');
const router = express.Router();
const { addToCart, getCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware'); // Login olub-olmadığını yoxlayır

// Yalnız login olmuş istifadəçilər səbətə nəsə ata bilər
router.post('/add', protect, addToCart);
router.get('/', protect, getCart);

module.exports = router;