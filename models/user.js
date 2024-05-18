const mongoose = require("mongoose");

// Defining the schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  jobTitle: {
    type: String,
  },

  gender: {
    type: String,
  },
});

//creating a model
const User = mongoose.model("User", userSchema);

module.exports = User;
