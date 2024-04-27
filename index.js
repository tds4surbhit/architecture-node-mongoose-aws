const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));

// connecting moongoose

mongoose
  .connect("mongodb://127.0.0.1:27017/architectureNodeMongoose")
  .then(() => console.log("Connection Successful"))
  .catch(() => console.log("Error"));

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
const user = mongoose.model("User", userSchema);

app.post("/api/users", async (req, res) => {
  const body = req.body;
  await user.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    jobTitle: body.jobTitle,
    gender: body.gender,
  });
});
