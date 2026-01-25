const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // AŞAĞIDAKI CART HİSSƏSİNİ ƏLAVƏ ET:
  cart: [
    {
      product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', // Məhsul modelinə bağlanır
        required: true 
      },
      quantity: { 
        type: Number, 
        default: 1 
      }
    }
  ],
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);