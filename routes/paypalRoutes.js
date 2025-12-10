const express = require("express");
const router = express.Router();
const { createOrder, captureOrder } = require("../services/paypal");
router.post("/create-order", async (req, res) => {
  const order = await createOrder();
  const approveUrl = order.links.find(
    (link) => link.rel === "approve"
  ).href;
  res.json({ approveUrl });
});
router.get("/complete_order", async (req, res) => {
    res.render("success");
});
router.get("/cancel_order", (req, res) => {
    const { token } = req.query;  
    res.render("cancel-order", { token });  
});

module.exports = router;
