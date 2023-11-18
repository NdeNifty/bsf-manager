// backend/controllers/dataEntryController.js

const DataEntry = require('../models/DataEntrySchema');
const mongoose = require('mongoose');

exports.createDataEntry = async (dataPoint) => {
    const session = await mongoose.startSession(); // Start a transaction session
    session.startTransaction();
    try {
        const createdEntry = await DataEntry.create(dataPoint, { session });
        // Commit the transaction
        await session.commitTransaction();
        session.endSession(); // End the session
        return createdEntry;
    } catch (error) {
        // If an error occurs, abort the transaction
        await session.abortTransaction();
        session.endSession();
        console.error('Error creating data entry:', error);
        throw error;
    }
};

exports.getDataEntriesByUserId = async (userId) => {
    return await DataEntry.find({ userId });
};

exports.updateDataEntry = async (dataEntryId, data) => {
    return await DataEntry.findByIdAndUpdate(dataEntryId, data, { new: true });
};

exports.deleteDataEntry = async (dataEntryId) => {
    return await DataEntry.findByIdAndRemove(dataEntryId);
};

exports.getAllDataEntries = async () => {
    return await DataEntry.find();
};
