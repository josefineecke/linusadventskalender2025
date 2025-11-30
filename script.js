const openedDoors = {
  1: "doors-opened/door-opened1.png",
  2: "doors-opened/door-opened2.png",
  3: "doors-opened/door-opened3.png",
  4: "doors-opened/door-opened4.png",
  5: "doors-opened/door-opened5.png",
  6: "doors-opened/door-opened6.png",
  7: "doors-opened/door-opened7.png",
  8: "doors-opened/door-opened8.png",
  9: "doors-opened/door-opened9.png",
  10: "doors-opened/door-opened10.png",
  11: "doors-opened/door-opened11.png",
  12: "doors-opened/door-opened12.png",
  13: "doors-opened/door-opened13.png",
  14: "doors-opened/door-opened14.png",
  15: "doors-opened/door-opened15.png",
  16: "doors-opened/door-opened16.png",
  17: "doors-opened/door-opened17.png",
  18: "doors-opened/door-opened18.png",
  19: "doors-opened/door-opened19.png",
  20: "doors-opened/door-opened20.png",
  21: "doors-opened/door-opened21.png",
  22: "doors-opened/door-opened22.png",
  23: "doors-opened/door-opened23.png",
  24: "doors-opened/door-opened24.png",
};

// Alle Türchen-Elemente auswählen
document.querySelectorAll(".door").forEach(door => {
  const day = parseInt(door.dataset.day, 10);
  const popup = document.getElementById(`popup${day}`);
  const textarea = popup ? popup.querySelector('textarea') : null;
  const closeBtn = popup ? popup.querySelector('.close-btn') : null;

  door.addEventListener("click", () => {
    const today = new Date().getDate();

    if (day > today) {
      alert(`Dieses Türchen darfst du erst am ${day}. Dezember öffnen!`);
      return; // Popup nicht öffnen
    }

    // Türchen öffnen (Bild ersetzen)
    door.style.backgroundImage = `url('${openedDoors[day]}')`;

    // Popup öffnen, falls vorhanden
    if (popup) {
      popup.classList.add('active');
      if (textarea) textarea.value = localStorage.getItem(`door${day}text`) || "";
    }
  });

  // Popup schließen
  if (closeBtn) {
    closeBtn.addEventListener('click', () => popup.classList.remove('active'));
    popup.addEventListener('click', e => {
      if (e.target === e.currentTarget) popup.classList.remove('active');
    });
  }
});


// Schneefall
function createSnowflake() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.innerHTML = "❄";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.fontSize = (Math.random() * 10 + 10) + "px";
  snow.style.animationDuration = (Math.random() * 4 + 4) + "s";
  document.getElementById("snow").appendChild(snow);
  setTimeout(() => snow.remove(), 8000);
}
setInterval(createSnowflake, 200);
