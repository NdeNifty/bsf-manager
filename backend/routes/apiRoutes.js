// backend/routes/api.js
const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metricControllers');
const tasksController = require('../controllers/tasksControllers');

// Metrics API routes
router.get('/metrics', metricsController.getMetrics);
// Implement other metrics routes

// Tasks API routes
router.get('/tasks', tasksController.getTasks);
// Implement other tasks routes

module.exports = router;
