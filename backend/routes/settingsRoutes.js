const express = require('express');
const router = express.Router();
const SettingsController = require('../controllers/SettingsController');

router.post('/save-settings', SettingsController.saveSettings);
router.get('/get-settings', SettingsController.getSettings);

module.exports = router;
