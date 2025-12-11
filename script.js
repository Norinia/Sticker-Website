const sendButton = document.getElementById("send");
const loader = document.getElementById("loader");

sendButton.addEventListener("click", () => {
  // Loader anzeigen
  loader.style.display = "block";

  // Simuliere „Senden“ für 1,5 Sekunden
  setTimeout(() => {
    loader.innerText = "Erfolg! Deine Daten wurden abgeschickt.";

    // Nach 1 Sekunde Seite neu laden
    setTimeout(() => {
      location.reload();
    }, 1000);
  }, 1500);
});
