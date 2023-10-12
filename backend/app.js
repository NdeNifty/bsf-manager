// backend/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./utils/errorHandler');
const inventoryRoutes = require('./routes/inventoryRoutes');
const salesRoutes = require('./routes/salesRoutes');
const taskRoutes = require('./routes/taskRoutes');
const dataEntryRoutes = require('./routes/dataEntryRoutes');

const app = express();


// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);
app.use('/api', taskRoutes);
app.use('/api', salesRoutes);
app.use('/api', dataEntryRoutes);
app.use('/api', inventoryRoutes);
// Use the authentication routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
