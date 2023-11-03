const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesControllers');

// Get all sales
router.get('/all-sales', async (req, res, next) => {
    try {
        const sales = await salesController.getAllSales(req, res);
        console.log(sales);
        res.status(200).json(sales);
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Get sales for a user by ID
router.get('/sales/:userId', async (req, res, next) => {
    try {
        const sales = await salesController.getSalesByUserId(req, res);
        console.log(sales);
        res.status(200).json(sales);
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Add a new sale
router.post('/add-sale', async (req, res, next) => {
    try {
        const newSale = await salesController.recordSale(req.body);

        res.status(201).json(newSale); // 201 Created for resource creation
    } catch (err) {
        console.error('Error:', err.message);
        next(err);  // Pass the error to the error-handling middleware
    }
});

// Update a sale by ID
router.put('/sales/:saleId', async (req, res, next) => {
    try {
        const updatedSale = await salesController.updateSale(req, res);
        console.log(updatedSale);
        res.status(200).json(updatedSale); 
    } catch (err) {
        console.error('Error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// Delete a sale by ID
router.delete('/sales/:saleId', async (req, res, next) => {
    try {
        await salesController.deleteSale(req, res);
        console.log('Sale deleted successfully');
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
