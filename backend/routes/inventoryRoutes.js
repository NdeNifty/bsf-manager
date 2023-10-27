const express = require('express');
const router = express.Router();
const reportingController = require('../controllers/reporting.controller');

router.get('/total-feedstock', async (req, res) => {
  try {
    const totalFeedStock = await reportingController.getTotalFeedStock();
    res.json({ totalFeedStock });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Similar routes for Larvae and Pupa

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const Inventory = require('../controllers/inventoryControllers'); 

// // Get all inventories
// router.get('/get-all-inventory', async (req, res) => {
//   try {
//     const inventoryData = await Inventory.getAllInventory();
//     res.json(inventoryData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error retrieving all inventory entries' });
//   }
// });

// // Get inventory by userId
// router.get('/:userId', async (req, res) => {
//   try {
//     const inventory = await Inventory.getInventoryByUserId(req.params.userId);

//     if (!inventory) {
//       return res.status(404).json({ message: 'No inventory found for this user' });
//     }
//     res.json(inventory);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error retrieving inventory bla' });
//   }
// });



// // Add inventory for a user
// router.post('/', async (req, res) => {
//   try {
//     const { userId, feedstockAvailability, larvaeCount, pupaeCount, adultCount } = req.body;
//     const inventory = new Inventory({
//       userId,
//       feedstockAvailability,
//       larvaeCount,
//       pupaeCount,
//       adultCount
//     });
    

//     const savedInventory = await inventory.save();
//     res.json(savedInventory);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error adding inventory' });
//   }
// });

// // Update inventory for a user
// router.put('/:userId', async (req, res) => {
//   try {
//     const updatedInventory = await Inventory.findOneAndUpdate(
//       { userId: req.params.userId },
//       req.body,
//       { new: true }
//     );

//     if (!updatedInventory) {
//       return res.status(404).json({ message: 'No inventory found for this user' });
//     }
//     res.json(updatedInventory);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error updating inventory' });
//   }
// });

// // Delete inventory for a user
// router.delete('/:userId', async (req, res) => {
//   try {
//     const inventory = await Inventory.findOneAndDelete({ userId: req.params.userId });
//     if (!inventory) {
//       return res.status(404).json({ message: 'No inventory found for this user' });
//     }
//     res.json({ message: 'Inventory deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error deleting inventory' });
//   }
// });

// module.exports = router;
