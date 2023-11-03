
// backend/models/SalesSchema.js
const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
   date: {
      type: Date,
      default: Date.now,
    },
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
  customerName: String,
  phone: String,
  item: String,
  quantity: Number,
  unitPrice: Number,
  totalPrice: Number,
  
});

module.exports = mongoose.model('Sales', salesSchema);
