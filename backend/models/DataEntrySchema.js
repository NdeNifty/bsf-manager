// backend/models/DataEntry.js
const mongoose = require('mongoose');

const dataEntrySchema = new mongoose.Schema({
  // Define your metric schema fields here
  // User ID associated with the data entry
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: false,
  },
  // Date of input (default to the date when the input is made)
  dateOfInput: {
    type: Date,
    default: Date.now,
  },
  // Eggs harvested
  eggsHarvested: Number,
  // Larvae harvested
  larvaeHarvested: Number,
  // Pupae planted
  pupaePlanted: Number,
  // Waste input
  wasteInput: Number,
  // Waste Stock
  wasteStock: Number,
  // Comments or notes related to the data entry
  comments: String,
  // Reference to the corresponding feeding schedule entry
   feedingScheduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FeedingSchedule',
  },

});

module.exports = mongoose.model('DataEntry', dataEntrySchema);

