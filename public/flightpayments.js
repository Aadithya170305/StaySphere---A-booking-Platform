async function payNow1() {
 try {
    const params = new URLSearchParams(window.location.search);
    const rawPrice = params.get("price") || "250.00";
    const flightName = params.get("name") || "Flight Ticket";
    const INR_TO_USD = 0.012;
    const priceUSD = (parseFloat(rawPrice) * INR_TO_USD).toFixed(2);
    const res = await fetch("/api/paypal/flight/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: priceUSD,
        flightName: flightName,
      }),
    });
    const data = await res.json();
    if (data.approveUrl) {
      window.location.href = data.approveUrl;
    } else {
      alert("Payment failed. No approval link received.");
      console.log("PayPal Error:", data);
    }
  } 
  catch (error) {
    alert("Payment failed. Please try again.");
    console.error("Frontend Error:", error);
  }
}