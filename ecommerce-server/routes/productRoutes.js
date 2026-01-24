const express = require('express');
const router = express.Router();
const { 
    getProducts, 
    getProductById, 
    createProduct,
    deleteProduct, 
    updateProduct,
    createProductReview
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(getProducts)
    .post(protect, createProduct);

router.route('/:id')
    .get(getProductById)
    .delete(protect, deleteProduct) 
   .put(protect, updateProduct);  
router.route('/:id/reviews').post(protect, createProductReview);

module.exports = router;