// backend/config/passport-config.js
const dotenv = require('dotenv');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Your user model

dotenv.config();
passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
        return done(null, false, { message: 'Incorrect email' });
      }

      // Compare the password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/google/callback', // Replace with your callback URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Find or create a user with the Google ID
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = new User({
          googleId: profile.id,
          email: profile.emails[0].value,
          // Add any other user data you want to store
        });

        await newUser.save();

        return done(null, newUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
