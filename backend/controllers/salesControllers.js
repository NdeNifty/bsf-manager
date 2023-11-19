const Sale = require('../models/SalesSchema');
const DataEntry = require('../models/DataEntrySchema'); // Import the DataEntry model
const mongoose = require('mongoose');

exports.recordSale = async (saleData) => {
    const session = await mongoose.startSession(); // Start a transaction session
    session.startTransaction();
    try {
        // Create the sale record
        const sale = await Sale.create([saleData], { session });
        // Commit the transaction
        await session.commitTransaction();
        session.endSession(); // End the session
        return sale;
    } catch (error) {
        // If an error occurs, abort the transaction
        await session.abortTransaction();
        session.endSession();
        console.error('Error recording sale:', error);
        throw error;
    }
};

// Other controller methods...


exports.getSalesByUserId = async (userId) => {
    return await Sale.find({ userId });
};

exports.updateSale = async (saleId, data) => {
    return await Sale.findByIdAndUpdate(saleId, data, { new: true });
};

exports.deleteSale = async (saleId) => {
    return await Sale.findByIdAndRemove(saleId);
};

exports.getAllSales = async () => {
    return await Sale.find();
};
