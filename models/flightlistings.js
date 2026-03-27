const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline:       String,
  flightNumber:  String,
  departure:     String,
  arrival:       String,
  departureTime: String,
  arrivalTime:   String,
  duration:      String,
  price:         Number,
  reviews:       Number,
  logo: {
    filename: String,
    url:      String,
  },
});
module.exports = function FlightListingsFactory(connection) {
  if (connection.modelNames().includes("flightlistings")) {
    return connection.model("flightlistings");
  }
  return connection.model("flightlistings", flightSchema);
};