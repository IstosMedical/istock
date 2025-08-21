// src/index.js or src/App.js

function submitToSheet(data) {
  fetch("https://script.google.com/macros/s/AKfycbwfNc9eaJR2x0nKgudFew3jBC0x0YPrbjH0QGUjXo61MJTjKuDQMHJUQxoinQuKid0S/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log("Success:", result);
    // Optionally show a toast or update UI
  })
  .catch(error => {
    console.error("Error:", error);
  });
}
