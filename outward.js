// outward.js
document.getElementById('outwardForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    type: 'Outward',
    item: e.target.item.value,
    quantity: e.target.quantity.value,
    date: e.target.date.value
  };
  await fetch('https://script.google.com/macros/s/AKfycbwfNc9eaJR2x0nKgudFew3jBC0x0YPrbjH0QGUjXo61MJTjKuDQMHJUQxoinQuKid0S/exec', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
  alert('Outward entry submitted!');
});
