async function payNow() {
  try {
    const res = await fetch("http://localhost:3000/api/paypal/create-order", {
      method: "POST",
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
