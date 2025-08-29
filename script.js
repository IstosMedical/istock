function domReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1000);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

domReady(function () {
  const scanner = new Html5QrcodeScanner("my-qr-reader", {
    fps: 10,
    qrbox: 250,
  });

function onScanSuccess(decodedText, decodedResult) {
  // ✅ Auto-fill the text field
  document.getElementById("qr-result").value = decodedText;

  // ✅ Optional: show toast or alert
  alert("✅ QR Code scanned: " + decodedText);

  // 🛑 Stop scanning
  scanner.clear().then(() => {
    document.getElementById("my-qr-reader").innerHTML = "";
  }).catch((err) => {
    console.error("Failed to clear scanner:", err);
  });
}

