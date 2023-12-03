const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
  location: String,
  units: String,
  notificationsEnabled: Boolean,
  // You can add more settings fields as needed
});

const Settings = mongoose.model('Settings', SettingsSchema);

module.exports = Settings;
