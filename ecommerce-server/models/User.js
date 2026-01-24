const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Zəhmət olmasa adınızı daxil edin']
    },
    email: {
        type: String,
        required: [true, 'Zəhmət olmasa email daxil edin'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Zəhmət olmasa şifrə daxil edin']
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);