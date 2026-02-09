const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const passport = require('passport'); 

require('./config/passport'); 

connectDb();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors({
    origin: "*", 
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize()); 

// Root route - BU ƏLAVƏ EDİN ⬇️
app.get('/', (req, res) => {
    res.json({ 
        message: 'Game Workdo Backend API is running!',
        status: 'success',
        endpoints: {
            users: '/api/users',
            products: '/api/products',
            cart: '/api/cart',
            orders: '/api/orders',
            auth: '/api/auth'
        }
    });
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes')); 
app.use('/api/orders', require('./routes/orderRoutes')); 
app.use('/api/auth', require('./routes/authRoutes')); 

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

app.listen(port, () => {
    console.log(`Server ${port} portunda işləyir...`);
});
