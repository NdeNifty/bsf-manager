// backend/controllers/metricController.js
const Metric = require('../models/Metric');

// Controller function to create a new metric entry
exports.createMetric = async (req, res) => {
  try {
    const newMetric = await Metric.create(req.body);
    res.status(201).json(newMetric);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Metric creation failed' });
  }
};

// Controller function to get metrics for a specific user
exports.getMetricsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const metrics = await Metric.find({ userId });
    res.json(metrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to update a metric entry
exports.updateMetric = async (req, res) => {
  try {
    const metricId = req.params.metricId;
    const updatedMetric = await Metric.findByIdAndUpdate(metricId, req.body, { new: true });
    if (!updatedMetric) {
      return res.status(404).json({ error: 'Metric not found' });
    }
    res.json(updatedMetric);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Metric update failed' });
  }
};

// Controller function to delete a metric entry
exports.deleteMetric = async (req, res) => {
  try {
    const metricId = req.params.metricId;
    const deletedMetric = await Metric.findByIdAndRemove(metricId);
    if (!deletedMetric) {
      return res.status(404).json({ error: 'Metric not found' });
    }
    res.json({ message: 'Metric deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Metric deletion failed' });
  }
};

// Implement other metric-related controller functions as needed
