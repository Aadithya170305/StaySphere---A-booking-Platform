const axios = require("axios");
require("dotenv").config();
async function generateAccessToken() {
  try {
    const response = await axios({
      url: `${process.env.PAYPAL_BASE_URL}/v1/oauth2/token`,
      method: "POST",
      data: "grant_type=client_credentials",
      auth: {
        username: process.env.PAYPAL_CLIENT_ID,
        password: process.env.PAYPAL_CLIENT_SECRET,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Access Token Error:", error.response?.data || error.message);
    throw new Error("Failed to generate PayPal access token");
  }
}
exports.createOrder = async (bookingType = "hotel", bookingDetails = {}) => {
  const accessToken = await generateAccessToken();

  const order = await axios.post(
    `${process.env.PAYPAL_BASE_URL}/v2/checkout/orders`,
    {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00",
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: "100.00",
              },
            },
          },
          items: [
            {
              name: "Resort Booking",
              description: "Luxury resort stay",
              quantity: "1",
              unit_amount: {
                currency_code: "USD",
                value: "100.00",
              },
            },
          ],
        },
      ],
      application_context: {
        return_url: "http://localhost:3000/api/paypal/complete_order",
        cancel_url: "http://localhost:3000/api/paypal/cancel_order", 
      },
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return order.data;
};
exports.captureOrder = async (orderID) => {
  const accessToken = await generateAccessToken();

  const response = await axios({
    url: `${process.env.PAYPAL_BASE_URL}/v2/checkout/orders/${orderID}/capture`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
