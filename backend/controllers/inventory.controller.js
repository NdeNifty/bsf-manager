const FeedStock = require('../models/feedStock.model');
const Larvae = require('../models/larvae.model');
const Pupa = require('../models/pupa.model');

exports.getTotalFeedStock = async function() {
  const result = await FeedStock.aggregate([
    {
      $group: {
        _id: null,
        totalFeedStock: { $sum: "$quantity" }
      }
    }
  ]);
  return result[0].totalFeedStock;
};

// Similar functions for Larvae and Pupa
