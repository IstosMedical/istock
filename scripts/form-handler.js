document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-type]");
  const responseMsg = document.getElementById("responseMsg");

  form.addEventListener("submit", async (e) => {
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
      responseMsg.textContent = result.message || "Submission successful!";
    } catch (err) {
      responseMsg.textContent = "Error submitting form. Please try again.";
      console.error("Submission error:", err);
    }
  });
