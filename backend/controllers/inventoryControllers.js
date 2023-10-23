const Inventory = require('../models/DataEntrySchema');

// Create a new inventory entry
exports.createInventory = async (data) => {
  return await Inventory.create(data);
};

// Get inventory entries by user ID
exports.getInventoryByUserId = async (userId) => {
  return await Inventory.find({ userId });
};

// Update an inventory entry by ID
exports.updateInventory = async (inventoryId, data) => {
  return await Inventory.findByIdAndUpdate(inventoryId, data, { new: true });
};

// Delete an inventory entry by ID
exports.deleteInventory = async (inventoryId) => {
  return await Inventory.findByIdAndRemove(inventoryId);
};

// Get all inventories
exports.getAllInventory = async () => {
  return await Inventory.find();
};
