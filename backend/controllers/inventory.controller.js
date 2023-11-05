// backend/controllers/inventory.controller.js
const DataEntry = require('../models/DataEntrySchema'); // Import the DataEntry model


const getAggregatedData = async (req, res) => {
    try {
        // Fetch all feedstock entries from DataEntry
        const feedstockEntries = await DataEntry.find({}, 'wasteInput -_id'); // Select only the wasteInput field
    
        // Fetch all larvae entries from DataEntry
        const larvaeEntries = await DataEntry.find({}, 'larvaeHarvested -_id'); // Select only the larvaeHarvested field
    
        // Fetch all pupa entries from DataEntry
        const pupaEntries = await DataEntry.find({}, 'pupaePlanted -_id'); // Select only the pupaePlanted field
        
    
        // Combine the entries into a single object
        const result = {
            feedstockEntries: feedstockEntries,
            larvaeEntries: larvaeEntries,
            pupaEntries: pupaEntries
        };
    
        res.json(result);
    
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
};

module.exports = {
    getAggregatedData
};
