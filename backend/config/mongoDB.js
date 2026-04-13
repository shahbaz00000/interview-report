const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return true;
  }

  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.warn("MONGO_URI is not set. Interview reports will not be saved to MongoDB.");
    return false;
  }

  try {
    await mongoose.connect(mongoUri);
    isConnected = true;
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    return false;
  }
};

module.exports = connectDB;
