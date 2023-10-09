// backend/controllers/googleAuthController.js
const passport = require('passport');

// Handle Google OAuth login
exports.googleLogin = (req, res) => {
  // Redirect to the Google OAuth login page
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
};

// Handle Google OAuth signup and callback
exports.googleSignup = (req, res) => {
  // Redirect to the Google OAuth signup page
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
};

// Handle Google OAuth callback after successful login/signup
exports.googleAuthCallback = (req, res) => {
  passport.authenticate('google', {
    successRedirect: '/dashboard', // Redirect to the dashboard upon successful login/signup
    failureRedirect: '/login', // Redirect to the login page upon failed login/signup
  })(req, res);
};
