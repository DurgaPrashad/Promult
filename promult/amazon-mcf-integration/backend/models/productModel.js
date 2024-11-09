const mongoose = require('mongoose');

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  category: {
    type: String
  }
});

// Create the Product model using the schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model
module.exports = Product;