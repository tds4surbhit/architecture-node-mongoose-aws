const express = require("express");
const mongoose = require("mongoose");
const { connectMongoDB } = require("./connection");
const middlewares = require("./middlewares");

const UserRouter = require("./routes/user");
const app = express();

app.use(express.urlencoded({ extended: false }));

// Use the logging middleware
app.use(middlewares.logReqRes("log.txt"));

// connecting moongoose
connectMongoDB("mongodb://127.0.0.1:27017/architectureNodeMongoose").then(
  () => {
    console.log("MongoDB Connected");
  }
);

// Routes
app.use("/api/user", UserRouter);

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
