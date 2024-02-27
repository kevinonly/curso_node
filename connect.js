const mongoose = require("mongoose");

const mongoURI = `mongodb+srv://${process.env.user}:${process.env.password}@cursonodejs.7lubtq5.mongodb.net/database?retryWrites=true&w=majority&appName=CURSONODEJS`;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
