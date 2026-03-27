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
    console.error(" Access Token Error:", {
      message: error.message,
      data: error.response?.data,
      status: error.response?.status,
    });
    throw new Error("Failed to generate PayPal access token");
  }
}
exports.createOrder = async (
  bookingType = "hotel",
  bookingDetails = {}
) => {
  try {
    const accessToken = await generateAccessToken();
    const price = bookingDetails.price || "100.00";
    const name = bookingDetails.name || "Resort Booking";
    const description = bookingDetails.description || "Luxury resort stay";
    const response = await axios.post(
      `${PAYPAL_BASE_URL}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: price,
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: price,
                },
              },
            },
            items: [
              {
                name: name,
                description: description,
                quantity: "1",
                unit_amount: {
                  currency_code: "USD",
                  value: price,
                },
              },
            ],
          },
        ],
        application_context: {
          return_url: `${BASE_URL}/api/paypal/complete_order`,
          cancel_url: `${BASE_URL}/api/paypal/cancel_order`,
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
  } catch (error) {
    console.error(" Create Order Error:", {
      message: error.message,
      data: error.response?.data,
      status: error.response?.status,
    });

    throw new Error("Failed to create PayPal order");
  }
};
exports.captureOrder = async (orderID) => {
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
  } catch (error) {
    console.error(" Capture Order Error:", {
      message: error.message,
      data: error.response?.data,
      status: error.response?.status,
    });

    throw new Error("Failed to capture PayPal order");
  }
};