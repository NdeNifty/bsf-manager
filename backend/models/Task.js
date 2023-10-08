// backend/models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  // Define your task schema fields here
});

module.exports = mongoose.model('Task', taskSchema);
