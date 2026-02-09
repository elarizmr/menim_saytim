const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const passport = require('passport'); 

// Yol tənzimləməsi: .env faylı server qovluğundadırsa belə qalır
dotenv.config({ path: path.join(__dirname, '.env') });
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

// 1. API Marşrutları
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes')); 
app.use('/api/orders', require('./routes/orderRoutes')); 
app.use('/api/auth', require('./routes/authRoutes')); 

// 2. FRONTEND YOLUNU DƏYİŞDİK ⬇️
// Sənin strukturuna görə 'front' qovluğunun daxilindəki 'dist' və ya 'build' olmalıdır.
// Əgər React istifadə edirsənsə və Vite-dirsə 'dist', create-react-app-dırsa 'build' yaz.
const frontendPath = path.join(__dirname, '../front/dist'); 

// Statik faylları xidmət et
app.use(express.static(frontendPath));

// 3. Upload qovluğu (serverin daxilindədirsə)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 4. Əsas marşrut idarəetməsi ⬇️
app.get('*', (req, res) => {
    // API sorğularına toxunma
    if (req.url.startsWith('/api')) {
        return res.status(404).json({ message: "API endpoint not found" });
    }
    
    // Digər hər şeyi (saytın özünü) front/index.html-ə yönləndir
    res.sendFile(path.join(frontendPath, 'index.html'), (err) => {
        if (err) {
            // Əgər fayl yoxdursa (hələ build olunmayıbsa) bu mesaj çıxacaq
            res.status(200).send("Backend is up. Please ensure frontend is built in /front/dist");
        }
    });
});

// Xəta idarəetməsi
app.use((err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

// Vercel üçün listen hissəsini belə saxlaya bilərsən, amma exports vacibdir
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server ${port} portunda işləyir...`);
    });
}

module.exports = app;