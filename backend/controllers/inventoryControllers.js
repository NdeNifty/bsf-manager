// backend/controllers/inventoryController.js
const Inventory = require('../models/Inventory');

// Controller function to create a new inventory entry
exports.createInventory = async (req, res) => {
  try {
    const newInventory = await Inventory.create(req.body);
    res.status(201).json(newInventory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Inventory creation failed' });
  }
};

// Controller function to get inventory entries by user ID
exports.getInventoryByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const inventoryEntries = await Inventory.find({ userId });
    res.json(inventoryEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to update an inventory entry by ID
exports.updateInventory = async (req, res) => {
  try {
    const inventoryId = req.params.inventoryId;
    const updatedInventory = await Inventory.findByIdAndUpdate(
      inventoryId,
      req.body,
      { new: true }
    );
    if (!updatedInventory) {
      return res.status(404).json({ error: 'Inventory entry not found' });
    }
    res.json(updatedInventory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Inventory update failed' });
  }
};

// Controller function to delete an inventory entry by ID
exports.deleteInventory = async (req, res) => {
  try {
    const inventoryId = req.params.inventoryId;
    const deletedInventory = await Inventory.findByIdAndRemove(inventoryId);
    if (!deletedInventory) {
      return res.status(404).json({ error: 'Inventory entry not found' });
    }
    res.json({ message: 'Inventory entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Inventory entry deletion failed' });
  }
};

// Implement other inventory-related controller functions as needed
