// backend/models/feedStock/model.js
const mongoose = require('mongoose');

const feedStock = new mongoose.Schema({
  date: { 
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: true
  },
  // Any additional fields you might want for pupa
  // e.g., location, emergence date, etc.
});

module.exports = mongoose.model('Feed', feedStock);
