const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    url: String,
    image: String,
    title: String,
    price1: Number,
    price2: Number,
    off: Number,
    category: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
