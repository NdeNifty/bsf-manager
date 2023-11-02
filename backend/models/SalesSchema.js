// backend/models/SalesSchema.js
const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
   },
   customerName: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      required: false,
   },
   item: {
      type: String,
      required: true,
   },
   quantity: {
      type: Number,
      required: true,
   },
   unitPrice: {
      type: Number,
      required: true,
   },
   totalPrice: {
      type: Number,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   }
});

module.exports = mongoose.model('Sales', saleSchema);
