// backend/routes/api/auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();
const authControllers = require('../../controllers/authControllers');

// Email/password login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Authentication successful
  res.json({ message: 'Authentication successful', user: req.user });
});

// Google OAuth login route
router.get('/google', (req, res, next) => {
  console.log("Google auth route accessed");
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
});

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000', // Redirect to the dashboard upon successful login
    failureRedirect: 'http://localhost:3000/auth/login', // Redirect to the login page upon failed login
  })
);

// User signup route
router.post('/signup', authControllers.signup);
module.exports = router;
