const mongoose = require('mongoose');

const PupaSchema = new mongoose.Schema({
  date: { 
    type: Date,
    default: Date.now
  },
  count: {
    type: Number,
    required: true
  },
  // Any additional fields you might want for pupa
  // e.g., location, emergence date, etc.
});

module.exports = mongoose.model('Pupa', PupaSchema);
