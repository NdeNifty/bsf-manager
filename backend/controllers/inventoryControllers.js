// backend/controllers/inventoryController.js
const DataEntry = require('../models/DataEntrySchema');
const Sales = require('../models/SalesSchema');

async function getInventoryData() {
  // Aggregates for DataEntry
  const dataEntryAggregates = await DataEntry.aggregate([
    {
      $group: {
        _id: "$dataItem",
        totalValue: { $sum: "$dataValue" },
      },
    },
  ]);
  
  // Format the data entry aggregates into an object for easier access
  const formattedDataEntryAggregates = {};
  dataEntryAggregates.forEach((entry) => {
    formattedDataEntryAggregates[entry._id] = entry.totalValue;
  });
  
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

  const inventory = {
    totalLarvaeLeft: formattedDataEntryAggregates['larvaeHarvested'] - (formattedSalesAggregates['Larvae'] || 0),
    totalPupaeLeft: formattedDataEntryAggregates['pupaePlanted'] - (formattedSalesAggregates['Pupae'] || 0),
    totalWasteStock: formattedDataEntryAggregates['wasteStock'], // If you need to subtract consumed waste, include it here
    // ... any other inventory calculations
  };

    // Include inventory in the combined results
    const combinedResults = {
      dataEntry: formattedDataEntryAggregates,
      sales: formattedSalesAggregates,
      inventory: inventory // Add the inventory calculations here
    };

  return combinedResults;
}

module.exports = {
  getInventoryData,
};
