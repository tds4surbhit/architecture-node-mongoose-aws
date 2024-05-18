const mongoose = require("mongoose");

async function connectMongoDB(url) {
  //   return mongoose.connect("mongodb://127.0.0.1:27017/architectureNodeMongoose");
  return mongoose.connect(url);
}

module.exports = {
  connectMongoDB,
};
