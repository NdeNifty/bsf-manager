// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const googleAuthController = require('../controllers/googleAuthController');

// Email/Password Authentication Routes
router.post('/login', authController.login);      // Login with email/password
router.post('/signup', authController.signup);    // Signup with email/password

// Google OAuth Authentication Routes
router.post('/signup/google', googleAuthController.googleSignup); // Signup with Google OAuth

module.exports = router;
