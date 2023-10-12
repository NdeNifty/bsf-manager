const express = require('express');
const router = express.Router();
const Inventory = require('../models/Metric');

// Get inventory by userId
router.get('/:userId', async (req, res) => {
  try {
    const inventory = await Inventory.findOne({ userId: req.params.userId });
    if (!inventory) {
      return res.status(404).json({ message: 'No inventory found for this user' });
    }
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add inventory for a user
router.post('/', async (req, res) => {
  try {
    const { userId, feedstockAvailability, larvaeCount, pupaeCount, adultCount } = req.body;
    const inventory = new Inventory({
      userId,
      feedstockAvailability,
      larvaeCount,
      pupaeCount,
      adultCount,
    });

    const savedInventory = await inventory.save();
    res.json(savedInventory);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update inventory for a user
router.put('/:userId', async (req, res) => {
  try {
    const updatedInventory = await Inventory.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true }
    );

    if (!updatedInventory) {
      return res.status(404).json({ message: 'No inventory found for this user' });
    }
    res.json(updatedInventory);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete inventory for a user
router.delete('/:userId', async (req, res) => {
  try {
    const inventory = await Inventory.findOneAndDelete({ userId: req.params.userId });
    if (!inventory) {
      return res.status(404).json({ message: 'No inventory found for this user' });
    }
    res.json({ message: 'Inventory deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
