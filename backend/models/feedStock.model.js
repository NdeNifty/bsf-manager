const mongoose = require('mongoose');

const FeedStockSchema = new mongoose.Schema({
  feedType: String,
  quantity: Number
});

module.exports = mongoose.model('FeedStock', FeedStockSchema);
