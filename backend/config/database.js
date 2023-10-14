
// backend/config/database.js
const mongoose = require('mongoose');

const connectDB = () => {
  const dbURI = process.env.MONGODB_URI || 'mongodb+srv://ndekong:bsffarmmanager@cluster0.xsknlpg.mongodb.net/?retryWrites=true&w=majority';

  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
  });
}

module.exports = connectDB;
