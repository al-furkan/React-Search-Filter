const mongoose = require('mongoose');

// Define the schema for the Users collection
const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'], // Assuming gender can be one of these values
  },
});

// Create the Mongoose model for the Users collection
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
