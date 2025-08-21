document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inward-form");
  const responseMsg = document.getElementById("responseMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // ⛔ Prevent page refresh

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
      responseMsg.textContent = result.message || "Submission successful!";
      form.reset(); // Optional: clear form after submission
    } catch (err) {
      responseMsg.textContent = "Error submitting form.";
      console.error("Submission error:", err);
    }
  });
});
