// backend/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
//const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/auth');
const errorHandler = require('./utils/errorHandler');
const inventoryRoutes = require('./routes/inventoryRoutes');
const salesRoutes = require('./routes/salesRoutes');
const taskRoutes = require('./routes/tasksRoutes');
const dataEntryRoutes = require('./routes/dataEntryRoutes');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require("body-parser")

require('./config/passport-config'); // Add this line to import Passport configuration


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    // you might also want to set up a store for production use
  }));

//Auth Routes
app.use(passport.initialize());
app.use('/', authRoutes);

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

//app.use(passport.session());

// Error handling middleware
app.use(errorHandler);

module.exports = app;
