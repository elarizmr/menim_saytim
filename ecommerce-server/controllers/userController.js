const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d', 
    });
};
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Bütün xanaları doldurun' });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Bu email artıq var' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id), 
            });
        } else {
            res.status(400).json({ message: 'İstifadəçi yaradıla bilmədi' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id), 
                message: "Giriş Uğurludur! "
            });
        } else {
            res.status(400).json({ message: 'Email və ya şifrə səhvdir' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
const getMe = async (req, res) => {
    const { _id, name, email } = req.user;
    
    res.status(200).json({
        id: _id,
        name,
        email,
        message: "  İstifadəçi məlumatları uğurla alındı"
    });
}
module.exports = { registerUser, loginUser, getMe };

