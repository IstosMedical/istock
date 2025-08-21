document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-type]");
  const responseMsg = document.getElementById("responseMsg");

  // Detect form type from data attribute (e.g., data-type="inward" or "outward")
  const formType = form.getAttribute("data-type") || "inward";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      type: formType,
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
      responseMsg.style.color = "#27ae60";
      form.reset();
    } catch (err) {
      responseMsg.textContent = "Error submitting form. Please try again.";
      responseMsg.style.color = "#c0392b";
      console.error("Submission error:", err);
    }
  });
});
