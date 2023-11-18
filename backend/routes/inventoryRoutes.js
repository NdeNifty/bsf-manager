// backend/routes/inventoryRoutes.js
const express = require('express');
const { getInventoryData } = require('../controllers/inventoryControllers');
const router = express.Router();

router.get('/aggregated', async (req, res) => {
  try {
    const inventoryData = await getInventoryData();
    res.json(inventoryData);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
