
// backend/models/Metric.js
const mongoose = require('mongoose');

const metricSchema = new mongoose.Schema({
  // Define your metric schema fields here
  // User ID associated with the metric data
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  // Timestamp for when the metric data was recorded
  timestamp: {
    type: Date,
    default: Date.now,
  },
  // Temperature (in Celsius)
  temperature: Number,
  // Humidity (in percentage)
  humidity: Number,
  // Biomass conversion rate (percentage or other units)
  biomassConversionRate: Number,
  // Larvae growth rate (percentage or other units)
  larvaeGrowthRate: Number,
  // Add any other metric-related fields as needed
});

module.exports = mongoose.model('Metricinput', metricSchema);

