// backend/models/dataentrySchema.js
const mongoose = require('mongoose');

const dataEntrySchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
 userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  // eggsHarvested: Number, 
  // larvaeHarvested: Number, 
  // pupaePlanted: Number, 
  // wasteInput: Number,
  // wasteStock: Number,
  dataItem: String,
  dataValue: Number,
  comments: String,
  
 
  // feedingScheduleId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'FeedingSchedule',
  // }

});

module.exports = mongoose.model('DataEntry', dataEntrySchema);
