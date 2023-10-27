const mongoose = require('mongoose');

const LarvaeSchema = new mongoose.Schema({
  date: { 
    type: Date,
    default: Date.now
  },
  count: {
    type: Number,
    required: true
  },
  // Any additional fields you might want for larvae
  // e.g., location, stage of growth, etc.
});

module.exports = mongoose.model('Larvae', LarvaeSchema);
