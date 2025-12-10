const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FlightSchema = new Schema({
    airline: String,
    flightNumber: String,
    departure: String,
    arrival: String,
    departureTime: String,
    arrivalTime: String,
    duration: String,
    price: Number,
    reviews: Number,
    logo: {
        filename: String,
        url: String
    },
});
const flightConnection = mongoose.createConnection('mongodb://localhost:27017/flightDB');
const FlightListingsModel = flightConnection.model('flightlistings', FlightSchema);
module.exports = FlightListingsModel;
