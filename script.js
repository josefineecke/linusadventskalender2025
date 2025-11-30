const openedDoors = {
  1: "_doors-opened/door-opened1.png",
  2: "_doors-opened/door-opened2.png",
  3: "_doors-opened/door-opened3.png",
  4: "_doors-opened/door-opened4.png",
  5: "_doors-opened/door-opened5.png",
  6: "_doors-opened/door-opened6.png",
  7: "_doors-opened/door-opened7.png",
  8: "_doors-opened/door-opened8.png",
  9: "_doors-opened/door-opened9.png",
  10: "_doors-opened/door-opened10.png",
  11: "_doors-opened/door-opened11.png",
  12: "_doors-opened/door-opened12.png",
  13: "_doors-opened/door-opened13.png",
  14: "_doors-opened/door-opened14.png",
  15: "_doors-opened/door-opened15.png",
  16: "_doors-opened/door-opened16.png",
  17: "_doors-opened/door-opened17.png",
  18: "_doors-opened/door-opened18.png",
  19: "_doors-opened/door-opened19.png",
  20: "_doors-opened/door-opened20.png",
  21: "_doors-opened/door-opened21.png",
  22: "_doors-opened/door-opened22.png",
  23: "_doors-opened/door-opened23.png",
  24: "_doors-opened/door-opened24.png",
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
  door.style.backgroundImage = `url('${openedDoors[day]}')`;

    // Zustand im Browser speichern -> Tür bleibt offen
//localStorage.setItem("door_open_" + day, "true");

    // ❄ Türchen DARF geöffnet werden → Türchenbild ersetzen
//door.style.backgroundImage = `url('_doors-opened/opened_group ${day}.png')`;

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

