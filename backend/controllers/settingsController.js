const mongoose = require('mongoose');
const Settings = require('../models/SettingsSchema');

const SettingsController = {
  async saveSettings(req, res) {
    const { location, units, notificationsEnabled } = req.body;
    try {
      const settings = new Settings({ location, units, notificationsEnabled });
      const savedSettings = await settings.save();
      res.status(200).json(savedSettings);
    } catch (error) {
      console.error('Error saving settings:', error);
      res.status(500).json({ message: "Error saving settings", error: error.message });
    }
  },

  async getSettings(req, res) {
    try {
      const settings = await Settings.findOne(); // Adjust this to match how you identify settings (e.g., by user)
      res.json(settings);
    } catch (error) {
      console.error('Error retrieving settings:', error);
      res.status(500).json({ message: "Error retrieving settings", error: error.message });
    }
  },

  // ... other controller methods ...
};

module.exports = SettingsController;
