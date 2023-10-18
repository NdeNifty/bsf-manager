const mongoose = require('mongoose');

const feedingScheduleSchema = new mongoose.Schema({
  // Define your metric schema fields here
  // Time of scheduled feeding
  scheduledTime: Date,
  // Type of feed (e.g., protein, vegetables)
  feedType: String,
  // Additional details or comments
  comments: String,
});

module.exports = mongoose.model('Feedschedule', feedingScheduleSchema);

