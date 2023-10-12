// backend/routes/dataEntryRoutes.js
const express = require('express');
const router = express.Router();
const DataEntry = require('../models/DataEntry');

// Get all data entries for a user
router.get('/data-entries', async (req, res, next) => {
    try {
        const entries = await DataEntry.find({ userId: req.user._id });
        res.status(200).json(entries);
    } catch (err) {
        next(err);
    }
});

// Add a new data entry
router.post('/data-entries', async (req, res, next) => {
    try {
        const entry = new DataEntry({ ...req.body, userId: req.user._id });
        const savedEntry = await entry.save();
        res.status(201).json(savedEntry);
    } catch (err) {
        next(err);
    }
});

// Update a data entry by ID
router.put('/data-entries/:id', async (req, res, next) => {
    try {
        const updatedEntry = await DataEntry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedEntry);
    } catch (err) {
        next(err);
    }
});

// Delete a data entry by ID
router.delete('/data-entries/:id', async (req, res, next) => {
    try {
        await DataEntry.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
});

module.exports = router;
