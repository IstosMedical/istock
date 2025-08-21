// inward.js

document.getElementById("inward-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    type: "inward",
    item: document.getElementById("item").value,
    quantity: document.getElementById("quantity").value,
    date: document.getElementById("date").value
  };

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbwfNc9eaJR2x0nKgudFew3jBC0x0YPrbjH0QGUjXo61MJTjKuDQMHJUQxoinQuKid0S/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    alert(result.message || "Submission successful!");
    e.target.reset();
  } catch (err) {
    alert("Submission failed. Please try again.");
    console.error("Error:", err);
  }
});
