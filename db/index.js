const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost/Animales");
  console.log("MongoDB Connected");
};

module.exports = {connectDB}