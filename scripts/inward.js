document.getElementById("inward-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    type: "inward",
    item: document.getElementById("item").value,
    quantity: document.getElementById("quantity").value,
    date: document.getElementById("date").value
  };

  try {
    const res = await fetch("https://script.google.com/macros/s/YOUR_DEPLOYED_ID/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await res.text();
    alert(result);
    e.target.reset();
  } catch (err) {
    alert("Submission failed. Please try again.");
  }
});

