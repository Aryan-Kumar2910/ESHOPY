const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect to:", process.env.MONGODB_URL); 
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};
module.exports = connectDB;


