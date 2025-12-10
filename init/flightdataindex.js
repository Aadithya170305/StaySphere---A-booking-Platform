const mongoose = require("mongoose");
const initData = require("./flightdata.js");
const listing = require("../models/flightlistings.js");
async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/flightDB");
    console.log("connected to mongodb");
    await initDB();
  } catch (err) {
    console.log("Error connecting to mongodb", err);
  }
}
const initDB = async () => {
  await listing.deleteMany({});
  await listing.insertMany(initData.data);
  console.log("Data inserted successfully");
};
main();
