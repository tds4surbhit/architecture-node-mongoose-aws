const express = require("express");
const mongoose = require("mongoose");
const connectMongoDB = require("./connection");

const UserRouter = require("./routes/user");
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((req, res, next) => {});

// connecting moongoose
connectMongoDB("mongodb://127.0.0.1:27017/architectureNodeMongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/architectureNodeMongoose")
  .then(() => console.log("Connection Successful"))
  .catch(() => console.log("Error"));

app.use("/user", UserRouter);
