// backend/models/Metric.js
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  // Define your metric schema fields here
  // User ID associated with the inventory
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  // Feedstock availability (e.g., kg or units)
  feedstockAvailability: Number,
  // Larvae count
  larvaeCount: Number,
  // Pupae count
  pupaeCount: Number,
  // Adult count
  adultCount: Number,
  // Add any other inventory-related fields as needed
});

module.exports = mongoose.model('Inventory', inventorySchema);

