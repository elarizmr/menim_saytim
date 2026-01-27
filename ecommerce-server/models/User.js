const mongoose = require('mongoose');

// 1. Səbət üçün ayrıca kiçik bir sxem yaradırıq
const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
}, { _id: false }); // _id: false qoyuruq ki, hər məhsul üçün lazımsız ID yaratmasın

// 2. Əsas User sxemi
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    
    // Yuxarıda yaratdığımız sxemi bura veririk
    cart: [cartItemSchema] 
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);