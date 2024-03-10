const mongoose = require('mongoose');

// Replace 'your_database_url' with the actual URL of your MongoDB database
const mongoURI = 'mongodb://localhost/your_database_name';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

module.exports = db;