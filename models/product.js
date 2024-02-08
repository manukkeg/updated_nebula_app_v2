const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
      },
    phonenum: {
        type: String,
        required: true,
        trim: true,
      },
    address: {
         type: String,
         required: true,
         trim: true,
      },
    category: {
         type: String,
         required: true,
      },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        },
});

const Product = mongoose.model("Product", productSchema);
module.exports = { Product, productSchema };
