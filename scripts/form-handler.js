document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const responseMsg = document.getElementById("responseMsg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbwfNc9eaJR2x0nKgudFew3jBC0x0YPrbjH0QGUjXo61MJTjKuDQMHJUQxoinQuKid0S/exec", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();
      responseMsg.textContent = result.message || "Submission successful!";
      form.reset();
    } catch (err) {
      responseMsg.textContent = "Error submitting form. Please try again.";
      console.error(err);
    }
  });
});
