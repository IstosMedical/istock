// inward.js
document.getElementById('inwardForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    type: 'Inward',
    item: e.target.item.value,
    quantity: e.target.quantity.value,
    date: e.target.date.value
  };
  await fetch('YOUR_WEB_APP_URL', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
  alert('Inward entry submitted!');
});
