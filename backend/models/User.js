const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,  // Make it sparse as not all users might sign in with Google
  },
  username: {
    type: String,
    unique: true,
    sparse: true,  // Use sparse because Google OAuth users might not have it initially
  },
  password: {
    type: String,
    sparse: true,  // Use sparse because Google OAuth users won't have a password initially
  },
  phone: {
    type: String,
    unique: true,
    sparse: true,  // Use sparse because Google OAuth users might not have it initially
  }
});

module.exports = mongoose.model('User', userSchema);
