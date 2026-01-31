const Order = require('../models/Order');
const User = require('../models/User'); 

const addOrderItems = async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ message: 'Sifariş üçün məhsul yoxdur' });
    }

    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error("Order Create Error:", error);
    res.status(500).json({ message: "Sifariş yaradılarkən xəta: " + error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
   
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
    );

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Sifariş tapılmadı' });
    }
  } catch (error) {
    console.error("Get Order Error:", error); 
    
    if (error.kind === 'ObjectId') {
        return res.status(404).json({ message: 'Yanlış Sifariş ID-si' });
    }
    res.status(500).json({ message: "Server xətası: " + error.message });
  }
};

const updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      
      order.paymentResult = {
        id: req.body.id || 'id_null',
        status: req.body.status || 'completed',
        update_time: req.body.update_time || Date.now(),
        email_address: req.body.email_address || req.user.email,
      };

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Sifariş tapılmadı' });
    }
  } catch (error) {
    console.error("Pay Error:", error);
    res.status(500).json({ message: error.message });
  }
};

const updateOrderToDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Sifariş tapılmadı' });
    }
  } catch (error) {
    console.error("Deliver Error:", error);
    res.status(500).json({ message: error.message });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
};