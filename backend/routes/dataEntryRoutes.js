const express = require('express');
const router = express.Router();
const dataEntryController = require('../controllers/dataentryControllers');

// ...

// Get all data entries
router.get('/all-data-entries', async (req, res, next) => {
    try {
        const entries = await dataEntryController.getAllDataEntries(req, res);
        console.log(entries);
        res.status(200).json(entries);
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Get data entries for a user by ID
router.get('/data-entries/:userId', async (req, res, next) => {
    try {
        const entries = await dataEntryController.getDataEntriesByUserId(req, res);
        console.log(entries);
        res.status(200).json(entries);
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Add a new data entry
router.post('/add-data-entry', async (req, res, next) => {
    try {
        const newEntry = await dataEntryController.createDataEntry(req, res);
        res.status(201).json(newEntry); // 201 Created for resource creation
    } catch (err) {
        console.error('Error:', err.message);
        next(err);  // Pass the error to the error-handling middleware
    }
});

// Update a data entry by ID
router.put('/data-entries/:dataEntryId', async (req, res, next) => {
    try {
        const updatedEntry = await dataEntryController.updateDataEntry(req, res);
        console.log(updatedEntry);
        res.status(200).json(updatedEntry); 
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Delete a data entry by ID
router.delete('/data-entries/:dataEntryId', async (req, res, next) => {
    try {
        await dataEntryController.deleteDataEntry(req, res);
        console.log('Data entry deleted successfully');
        res.status(204).send(); // 204 No Content for successful deletes with no body
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: err.message });
    }
});




// Error handling middleware (Place this after all your routes)
router.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }
    // Add checks for other types of errors here if needed
    return res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = router;
