// backend/controllers/inventoryController.js
const DataEntry = require('../models/DataEntrySchema');
const Sales = require('../models/SalesSchema');

async function getInventoryData() {
  // Aggregates for DataEntry
  const dataEntryAggregates = await DataEntry.aggregate([
    {
      $group: {
        _id: null,
        totalEggsHarvested: { $sum: "$eggsHarvested" },
        totalLarvaeHarvested: { $sum: "$larvaeHarvested" },
        totalPupaePlanted: { $sum: "$pupaePlanted" },
        totalWasteInput: { $sum: "$wasteInput" },
        totalWasteStock: { $sum: "$wasteStock" },
      },
    },
  ]);

  // Format the data entry aggregates into an object for easier access
  const formattedDataEntryAggregates = dataEntryAggregates.length > 0 ? dataEntryAggregates[0] : {
    totalEggsHarvested: 0,
    totalLarvaeHarvested: 0,
    totalPupaePlanted: 0,
    totalWasteInput: 0,
    totalWasteStock: 0
  };

  // Aggregates for Sales
  const salesAggregates = await Sales.aggregate([
    {
      $group: {
        _id: "$item",
        totalQuantitySold: { $sum: "$quantity" },
      },
    },
  ]);

  // Format the sales aggregates into an object for easier access
  const formattedSalesAggregates = salesAggregates.reduce((acc, curr) => {
    acc[curr._id] = curr.totalQuantitySold;
    return acc;
  }, {});

  // Combine the results
  const combinedResults = {
    dataEntry: formattedDataEntryAggregates,
    sales: formattedSalesAggregates,
  };

  return combinedResults;
}

module.exports = {
  getInventoryData,
};
