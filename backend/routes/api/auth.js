// backend/routes/api/auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Email/password login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Authentication successful
  res.json({ message: 'Authentication successful', user: req.user });
});

// Google OAuth login route
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/dashboard', // Redirect to the dashboard upon successful login
    failureRedirect: '/login', // Redirect to the login page upon failed login
  })
);

// User signup route
router.post('/signup', authController.signup);
module.exports = router;
