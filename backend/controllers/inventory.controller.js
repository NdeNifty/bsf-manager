const Feedstock = require('../models/feedStock.model');
const Larvae = require('../models/larvae.model');
const Pupa = require('../models/pupa.model');

const getAggregatedData = async (req, res) => {
    try {
        const feedstockTotal = await Feed.aggregate([
            {
                $group: {
                    _id: null,
                    totalFeedstock: { $sum: "$amount" }
                }
            }
        ]);

        const larvaeTotal = await Larvae.aggregate([
            {
                $group: {
                    _id: null,
                    totalLarvae: { $sum: "$count" }
                }
            }
        ]);

        const pupaTotal = await Pupa.aggregate([
            {
                $group: {
                    _id: null,
                    totalPupa: { $sum: "$count" }
                }
            }
        ]);

        const result = {
            totalFeedstock: feedstockTotal[0] ? feedstockTotal[0].totalFeedstock : 0,
            totalLarvae: larvaeTotal[0] ? larvaeTotal[0].totalLarvae : 0,
            totalPupa: pupaTotal[0] ? pupaTotal[0].totalPupa : 0
        };

        res.json(result);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// You can add more controller functions as required, e.g. for adding, updating, and deleting records.

module.exports = {
    getAggregatedData
};
