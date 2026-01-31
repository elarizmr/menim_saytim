const express = require('express');
const router = express.Router();

const { 
    addToCart, 
    getCart, 
    updateCartItem, 
    removeFromCart 
} = require('../controllers/cartController');

const { protect } = require('../middleware/authMiddleware'); 

router.post('/add', protect, addToCart);

router.get('/', protect, getCart);

router.put('/', protect, updateCartItem);

router.delete('/:id', protect, removeFromCart);

module.exports = router;