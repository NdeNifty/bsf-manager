// backend/models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  // Define your task schema fields here
   // User ID associated with the task
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  // Task name
  name: {
    type: String,
    required: true,
  },
  // Task description
  description: String,
  // Deadline for the task
  deadline: Date,
  // Task status (e.g., 'Not started', 'In progress', 'Completed')
  status: {
    type: String,
    enum: ['Not started', 'In progress', 'Completed'],
    default: 'Not started',
  },
});

module.exports = mongoose.model('Task', taskSchema);
