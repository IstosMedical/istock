document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inward-form");
  const responseMsg = document.getElementById("responseMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      date: document.getElementById("date").value,
      item: document.getElementById("item").value,
      quantity: document.getElementById("quantity").value,
      source: document.getElementById("source").value
    };

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbwfNc9eaJR2x0nKgudFew3jBC0x0YPrbjH0QGUjXo61MJTjKuDQMHJUQxoinQuKid0S/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      responseMsg.textContent = result.message || "✅ Submission successful!";
      responseMsg.style.color = "green";
      form.reset();
    } catch (err) {
      responseMsg.textContent = "❌ Error submitting form.";
      responseMsg.style.color = "red";
      console.error("Submission error:", err);
    }
  });
});
