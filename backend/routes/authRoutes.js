// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');
const googleAuthControllers = require('../controllers/googleAuthControllers');

// Email/Password Authentication Routes
router.post('/login', authController.login);      // Login with email/password
router.post('/signup', authController.signup);    // Signup with email/password

// Google OAuth Authentication Routes
router.post('/signup/google', googleAuthControllers.googleSignup); // Signup with Google OAuth

module.exports = router;
