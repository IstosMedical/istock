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
  const qrField = document.getElementById("qr-result");

  if (qrField) {
    qrField.value = decodedText;
  } else {
    console.warn("QR result field not found in DOM.");
  }

  alert("✅ QR Code scanned: " + decodedText);

  scanner.clear().then(() => {
    document.getElementById("my-qr-reader").innerHTML = "";
  }).catch((err) => {
    console.error("Failed to clear scanner:", err);
  });
}

  const toast = document.createElement("div");
toast.textContent = "QR scanned: " + decodedText;
toast.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#4caf50;color:white;padding:10px 20px;border-radius:5px;z-index:9999;";
document.body.appendChild(toast);
setTimeout(() => toast.remove(), 3000);


