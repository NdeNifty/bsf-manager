// backend/controllers/salesController.js

const Sale = require('../models/SalesSchema');

exports.recordSale = async (saledata) => {
    return await Sale.create(saledata);
};

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
