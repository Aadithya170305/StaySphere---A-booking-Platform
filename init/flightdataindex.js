const mongoose = require("mongoose");
const initData = require("./flightdata.js");
const FlightListingsFactory = require("../models/flightlistings.js");
async function main() {
  try {
    const flightConnection = await mongoose.createConnection(
      process.env.FLIGHT_DB_URL || "mongodb://mongo:27017/flightDB"
    );
    console.log("Connected to flightDB");
    const FlightListing = FlightListingsFactory(flightConnection);
    await initDB(FlightListing);
    process.exit(0); 
  } 
  catch (err) {
    console.error("Error connecting to flightDB:", err);
    process.exit(1);
  }
}
async function initDB(FlightListing) {
  await FlightListing.deleteMany({});
  await FlightListing.insertMany(initData.data);
  console.log("Flight data inserted successfully");
}
main();