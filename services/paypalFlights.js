const axios = require("axios");
require("dotenv").config();
const PAYPAL_BASE_URL = process.env.PAYPAL_BASE_URL || "https://api-m.sandbox.paypal.com";
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
async function generateAccessToken() {
  try {
    const response = await axios({
      url: `${PAYPAL_BASE_URL}/v1/oauth2/token`,
      method: "POST",
      data: "grant_type=client_credentials",
      auth: {
        username: PAYPAL_CLIENT_ID,
        password: PAYPAL_CLIENT_SECRET,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.access_token;
  } 
  catch (error) {
      console.error(" PayPal Token Error:", {
      message: error.message,
      data: error.response?.data,
      status: error.response?.status,
    });
    throw new Error("Failed to generate PayPal access token");
  }
}
exports.createFlightOrder = async (
  price = "250.00",
  flightName = "Flight Ticket"
) => {
  try {
    const accessToken = await generateAccessToken();
    const response = await axios.post(
      `${PAYPAL_BASE_URL}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: price,
            },
            description: flightName,
          },
        ],
        application_context: {
          return_url: `${BASE_URL}/api/paypal/flight/complete_order`,
          cancel_url: `${BASE_URL}/api/paypal/flight/cancel_order`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } 
  catch (error) {
      console.error("Create Flight Order Error:", {
      message: error.message,
      data: error.response?.data,
      status: error.response?.status,
    });
    throw new Error("Failed to create flight order");
  }
};
exports.captureFlightOrder = async (orderID) => {
  try {
    const accessToken = await generateAccessToken();
    const response = await axios({
      url: `${PAYPAL_BASE_URL}/v2/checkout/orders/${orderID}/capture`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } 
  catch (error) {
      console.error("Capture Flight Order Error:", {
      message: error.message,
      data: error.response?.data,
      status: error.response?.status,
    });

    throw new Error("Failed to capture flight payment");
  }
};