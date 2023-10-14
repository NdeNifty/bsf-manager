// backend/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
//const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/api/auth');
const errorHandler = require('./utils/errorHandler');
const inventoryRoutes = require('./routes/inventoryRoutes');
const salesRoutes = require('./routes/salesRoutes');
const taskRoutes = require('./routes/tasksRoutes');
const dataEntryRoutes = require('./routes/dataEntryRoutes');
const passport = require('passport');

require('./config/passport-config'); // Add this line to import Passport configuration


const app = express();


// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// Routes
//app.use('/api', apiRoutes);
app.use('/api', taskRoutes);
app.use('/api', salesRoutes);
app.use('/api', dataEntryRoutes);
app.use('/api', inventoryRoutes);
// Use the authentication routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
app.use(passport.initialize());
//app.use(passport.session());
