// backend/controllers/dataEntryController.js
const DataEntry = require('../models/DataEntrySchema');

// Controller function to create a new data entry
exports.createDataEntry = async (req, res) => {
  try {
    const newDataEntry = await DataEntry.create(req.body);
    res.status(201).json(newDataEntry);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).json({ error: 'Data entry creation failed' });
  }
};

// Controller function to get data entries by user ID
exports.getDataEntriesByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const dataEntries = await DataEntry.find({ userId });
    res.json(dataEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to update a data entry by ID
exports.updateDataEntry = async (req, res) => {
  try {
    const dataEntryId = req.params.dataEntryId;
    const updatedDataEntry = await DataEntry.findByIdAndUpdate(
      dataEntryId,
      req.body,
      { new: true }
    );
    if (!updatedDataEntry) {
      return res.status(404).json({ error: 'Data entry not found' });
    }
    res.json(updatedDataEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Data entry update failed' });
  }
};

// Controller function to delete a data entry by ID
exports.deleteDataEntry = async (req, res) => {
  try {
    const dataEntryId = req.params.dataEntryId;
    const deletedDataEntry = await DataEntry.findByIdAndRemove(dataEntryId);
    if (!deletedDataEntry) {
      return res.status(404).json({ error: 'Data entry not found' });
    }
    res.json({ message: 'Data entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Data entry deletion failed' });
  }
};

// Implement other data entry-related controller functions as needed
