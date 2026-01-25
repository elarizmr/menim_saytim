const User = require('../models/User');

// Səbətə məhsul əlavə etmək
const addToCart = async (req, res) => {
  const { productId, quantity } = req.body; // Frontdan gələn məlumat
  const userId = req.user._id; // Login olmuş istifadəçi

  try {
    const user = await User.findById(userId);

    // Məhsul artıq səbətdə varmı?
    const existingItem = user.cart.find((item) => 
      item.product.toString() === productId
    );

    if (existingItem) {
      // Varsa, sayını artır
      existingItem.quantity += Number(quantity) || 1;
    } else {
      // Yoxdursa, yeni əlavə et
      user.cart.push({ product: productId, quantity: Number(quantity) || 1 });
    }

    await user.save();
    res.status(200).json({ message: "Səbətə əlavə olundu", cart: user.cart });

  } catch (error) {
    res.status(500).json({ message: "Xəta baş verdi", error: error.message });
  }
};

// Səbəti gətirmək (Gələcəkdə lazım olacaq)
const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('cart.product');
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ message: "Səbət gətirilə bilmədi" });
  }
};

module.exports = { addToCart, getCart };