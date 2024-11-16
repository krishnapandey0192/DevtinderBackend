const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const dbConnectionString = process.env.DB_URL;
  await mongoose.connect(dbConnectionString);
};

module.exports = connectDB;
