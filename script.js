const openedDoors = {
  1: "_doors-opened/opened_group 1.png",
  2: "_doors-opened/opened_group 2.png",
  3: "_doors-opened/opened_group 3.png",
  4: "_doors-opened/opened_group 4.png",
  5: "_doors-opened/opened_group 5.png",
  6: "_doors-opened/opened_group 6.png",
  7: "_doors-opened/opened_group 7.png",
  8: "_doors-opened/opened_group 8.png",
  9: "_doors-opened/opened_group 9.png",
  10: "_doors-opened/opened_group 10.png",
  11: "_doors-opened/opened_group 11.png",
  12: "_doors-opened/opened_group 12.png",
  13: "_doors-opened/opened_group 13.png",
  14: "_doors-opened/opened_group 14.png",
  15: "_doors-opened/opened_group 15.png",
  16: "_doors-opened/opened_group 16.png",
  17: "_doors-opened/opened_group 17.png",
  18: "_doors-opened/opened_group 18.png",
  19: "_doors-opened/opened_group 19.png",
  20: "_doors-opened/opened_group 20.png",
  21: "_doors-opened/opened_group 21.png",
  22: "_doors-opened/opened_group 22.png",
  23: "_doors-opened/opened_group 23.png",
  24: "_doors-opened/opened_group 24.png",
};



document.querySelectorAll(".door").forEach(door => {
  let day = parseInt(door.dataset.day, 10);

  // --- Prüfen ob das Türchen bereits offen ist ---
// if (localStorage.getItem("door_open_" + day) === "true") {
// door.style.backgroundImage = `url("_doors-opened/opened_group ${day}.png")`;
// }

  // --- Klick-Event ---
  door.addEventListener("click", () => {
    let today = new Date().getDate(); // aktueller Tag

    // Türchen darf nur geöffnet werden, wenn der Tag erreicht wurde
    if (day > today) {
      alert("Dieses Türchen darfst du erst am " + day + ". Dezember öffnen!");
      return;
    }

    // Türchen-Bild ersetzen
    door.style.backgroundImage = `url("_doors-opened/opened_group ${day}.png")`;

    // Zustand im Browser speichern -> Tür bleibt offen
//localStorage.setItem("door_open_" + day, "true");

    // ❄ Türchen DARF geöffnet werden → Türchenbild ersetzen
    door.style.backgroundImage = `url('_doors-opened/opened_group ${day}.png')`;

    // Inhalt anzeigen
    // let box = document.getElementById("content");
    // box.innerHTML = content[day] || "Kein Inhalt";
    // box.style.display = "block";
  });
});



// Türchen 1 öffnen
document.querySelector('.d1').addEventListener('click', () => {
  document.getElementById('popup1').classList.add('active');
});

// Popup schließen
document.querySelector('#popup1 .close-btn').addEventListener('click', () => {
  document.getElementById('popup1').classList.remove('active');
});

// Auch schließen beim Klicken außerhalb
document.getElementById('popup1').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    document.getElementById('popup1').classList.remove('active');
  }
});


// Türchen 2 öffnen
document.querySelector('.d2').addEventListener('click', () => {
  document.getElementById('popup2').classList.add('active');

  // gespeicherten Text laden
  document.getElementById('input2').value =
    localStorage.getItem("door2text") || "";
});


// Türchen-2 schließen
document.querySelector('#popup2 .close-btn').addEventListener('click', () => {
  document.getElementById('popup2').classList.remove('active');
});


// Türchen 3 öffnen
document.querySelector('.d3').addEventListener('click', () => {
  document.getElementById('popup3').classList.add('active');

  // gespeicherten Text laden
  document.getElementById('input3').value =
    localStorage.getItem("door3text") || "";
});

// Türchen 3 schließen
document.querySelector('#popup3 .close-btn').addEventListener('click', () => {
  document.getElementById('popup3').classList.remove('active');
});




function createSnowflake() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.innerHTML = "❄";

  // Zufällige Position links
  snow.style.left = Math.random() * 100 + "vw";

  // zufällige Größe
  snow.style.fontSize = (Math.random() * 10 + 10) + "px";

  // zufällige Fallgeschwindigkeit
  snow.style.animationDuration = (Math.random() * 4 + 4) + "s";

  document.getElementById("snow").appendChild(snow);

  // Schneeflocke nach einiger Zeit löschen
  setTimeout(() => snow.remove(), 8000);
}

// alle 200ms eine Schneeflocke erzeugen
setInterval(createSnowflake, 200);

