// backend/routes/api.js
const express = require('express');
const router = express.Router();
const metricsControllers = require('../controllers/metricControllers');
const tasksControllers = require('../controllers/tasksControllers');

// Metrics API routes
router.get('/metrics', metricsControllers.getMetrics);
// Implement other metrics routes

// Tasks API routes
router.get('/tasks', tasksControllers.getTasks);
// Implement other tasks routes

module.exports = router;
