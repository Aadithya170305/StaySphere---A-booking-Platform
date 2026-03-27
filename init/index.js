const mongoose = require("mongoose");
const initData = require("./data.js"); 
const Listing = require("../models/listings.js");
async function main() {
  try {
    await mongoose.connect(
      process.env.MONGO_URL || "mongodb://mongo:27017/realestateDB"
    );
    console.log("Connected to realestateDB");
    await initDB();
    process.exit(0); 
  } 
  catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}
async function initDB() {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Realestate data inserted successfully");
}
main();