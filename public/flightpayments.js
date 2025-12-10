async function payNow1() {
  try {
    const res = await fetch("http://localhost:3000/api/paypal/flight/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: "250.00",
        flightName: "Hyderabad to Dubai"
      })
    });

    const data = await res.json();

    if (data.approveUrl) {
      window.location.href = data.approveUrl;
    } else {
      alert("Payment failed. No approval link received.");
      console.log("PayPal Error:", data);
    }
  } catch (error) {
    alert("Payment failed. Please try again.");
    console.error("Frontend Error:", error);
  }
}
