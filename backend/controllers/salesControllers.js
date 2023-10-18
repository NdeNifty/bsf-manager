// backend/controllers/salesController.js
const Sale = require('../models/SalesSchema');

exports.recordSale = async (req, res, next) => {
   try {
      const sale = new Sale({ ...req.body, userId: req.user._id });
      const savedSale = await sale.save();
      res.status(201).json(savedSale);
   } catch (error) {
      next(error);
   }
};

exports.getSales = async (req, res, next) => {
   try {
      const sales = await Sale.find({ userId: req.user._id });
      res.status(200).json(sales);
   } catch (error) {
      next(error);
   }
};
