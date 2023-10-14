// backend/routes/salesRoutes.js
const express = require('express');
const router = express.Router();
const { recordSale, getSales } = require('../controllers/salesControllers');

router.post('/sales', recordSale);
router.get('/sales', getSales);

module.exports = router;
