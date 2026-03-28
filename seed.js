const mongoose = require("mongoose");
const ListingsModel = require("./models/listings.js");
const FlightListingsFactory = require("./models/flightlistings.js");
const hotelData = require("./init/data.js");
const flightData = require("./init/flightdata.js");
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo-service:27017/realestateDB";
const FLIGHT_URL = process.env.FLIGHT_DB_URL || "mongodb://mongo-service:27017/flightDB";
async function seed() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to realestateDB");
    await ListingsModel.deleteMany({});
    await ListingsModel.insertMany(hotelData.data);
    console.log("Hotels seeded ");
    await mongoose.disconnect();
    const flightConn = await mongoose.createConnection(FLIGHT_URL).asPromise();
    console.log("Connected to flightDB");
    const FlightModel = FlightListingsFactory(flightConn);
    await FlightModel.deleteMany({});
    await FlightModel.insertMany(flightData.data);
    console.log("Flights seeded ");
    await flightConn.close();
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}
seed();