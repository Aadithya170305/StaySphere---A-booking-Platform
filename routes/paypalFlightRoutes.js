const express = require("express");
const router = express.Router();
const {createFlightOrder,captureFlightOrder,} = require("../services/paypalFlights.js");
router.post("/create-order", async (req, res) => {
  const { price, flightName } = req.body;
  const order = await createFlightOrder(price, flightName);
  const approveUrl = order.links.find(
    (link) => link.rel === "approve"
  ).href;
  res.json({ approveUrl });
});
router.get("/complete_order", async (req, res) => {
  res.render("flightSuccess");
});
router.get("/cancel_order", (req, res) => {
  res.render("cancel-order");
});
module.exports = router;
