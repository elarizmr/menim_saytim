const asyncHandler = require('express-async-handler');
const Product = require('../models/Product'); 
const getProducts = asyncHandler(async (req, res) => {
    let query = {};

    if (req.query.keyword) {
        query.name = {
            $regex: req.query.keyword,
            $options: 'i' 
        };
    }

    if (req.query.brand) {
        query.brand = req.query.brand;
    }

    if (req.query.category) {
        query.category = req.query.category;
    }
    
    if (req.query.minPrice || req.query.maxPrice) {
        query.price = {};
        if (req.query.minPrice) query.price.$gte = Number(req.query.minPrice);
        if (req.query.maxPrice) query.price.$lte = Number(req.query.maxPrice);
    }
    
    if (req.query.inStock) {
        if (req.query.inStock === 'true') {
            query.countInStock = { $gte: 1 }; 
        } else if (req.query.inStock === 'false') {
            query.countInStock = { $lte: 0 }; 
        }
    }

    const products = await Product.find(query);
    res.json(products);
});


const getProductById = asyncHandler(async (req, res) => {
   const product = await Product.findById(req.params.id);   
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Məhsul tapılmadı');
    }
});


const createProduct = asyncHandler(async (req, res) => {
    const { 
        name, price, description, image, images, 
        brand, category, countInStock, styles, style 
    } = req.body;

    const product = new Product({
        name,
        price,
        user: req.user._id,
        image,
        images, 
        brand,
        category,
        styles, 
        style,
        countInStock,
        numReviews: 0,
        description
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});


const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.deleteOne();
        res.json({ message: 'Məhsul uğurla silindi' });
    } else {
        res.status(404);
        throw new Error('Məhsul tapılmadı');
    }
});


const updateProduct = asyncHandler(async (req, res) => {
    const { 
        name, price, description, image, images, 
        brand, category, countInStock, styles, style 
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.image = image || product.image;
        product.images = images || product.images;
        product.brand = brand || product.brand;
        product.category = category || product.category;
        product.countInStock = countInStock || product.countInStock;
        product.styles = styles || product.styles;
        product.style = style || product.style;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Məhsul tapılmadı');
    }
});


const createProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
    
    const product = await Product.findById(req.params.id);
    if (product) {
        const alreadyReviewed = product.reviews.find(
            r => r.user.toString() === req.user._id.toString()
        ); 
        if (alreadyReviewed) {
            res.status(400);
            throw new Error('Siz artıq bu məhsulu rəyləndirmisiniz');
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        };

        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating = 
            product.reviews.reduce((acc, item) => item.rating + acc, 0) / 
            product.reviews.length;

            await product.save();
            res.status(201).json({ message: 'Rəy əlavə edildi' });
    } else {
        res.status(404);
        throw new Error('Məhsul tapılmadı');
    }
});

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
    createProductReview 
};