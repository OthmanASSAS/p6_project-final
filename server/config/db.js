const mongoose = require("mongoose");
require("dotenv").config();

const { dbURI } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
