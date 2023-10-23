// backend/controllers/dataEntryController.js

const DataEntry = require('../models/DataEntrySchema');

exports.createDataEntry = async (data) => {
    return await DataEntry.create(data);
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
