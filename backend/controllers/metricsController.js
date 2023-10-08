// backend/controllers/metricsController.js
const Metric = require('../models/Metricinput');

exports.getMetrics = async (req, res) => {
  try {
    const metrics = await Metric.find();
    res.json(metrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Implement other CRUD operations as needed


