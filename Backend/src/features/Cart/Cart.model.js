const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Cart = mongoose.model("cart", CartSchema);

module.exports = Cart;
