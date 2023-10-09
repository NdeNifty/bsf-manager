const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your metric schema fields here
  // User's display name (e.g., full name)
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  // Email address (used for email-based signup and login)
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  // Google ID (used for Google sign-in)
  googleId: {
    type: String,
    unique: true,
  },
   // Username (used for custom username-based signup and login)
   username: {
    type: String,
    unique: true,
    required: true,
  },
  // Password (hashed and salted)
  password: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  }
  // Add other user-related fields as needed
});

module.exports = mongoose.model('User', userSchema);
