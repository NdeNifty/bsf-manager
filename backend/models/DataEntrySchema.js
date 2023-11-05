const mongoose = require('mongoose');

const dataEntrySchema = new mongoose.Schema({
  dateOfInput: {
    type: Date,
    default: Date.now,
  },
  eggsHarvested: Number, // This field can hold negative values for sales
  larvaeHarvested: Number, // This field can hold negative values for sales
  pupaePlanted: Number, // This field can hold negative values for sales
  wasteInput: Number,
  wasteStock: Number,
  comments: String,
  feedingScheduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FeedingSchedule',
  },
  // // Additional fields for recording sales as negative entries
  // itemSold: {
  //   type: String,
  //   enum: ['eggs', 'larvae', 'pupae'], // Enum to restrict the item sold to these three options
  //   required: function() { return this.quantitySold != null; } // Required if quantitySold is present
  // },
  // quantitySold: {
  //   type: Number,
  //   validate: {
  //     validator: Number.isInteger,
  //     message: '{VALUE} is not an integer value'
  //   },
  //   required: function() { return this.itemSold != null; } // Required if itemSold is present
  // },
  // // Include a flag to distinguish between regular data entry and sale adjustment entries
  // isSaleAdjustment: {
  //   type: Boolean,
  //   default: false
  // }
});

module.exports = mongoose.model('DataEntry', dataEntrySchema);
