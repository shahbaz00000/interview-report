const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  try{
   await mongoose.connect('mongodb://127.0.0.1:27017/interview-report');
   console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
