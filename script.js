let points = 0;
let level = 1;

const pointsDisplay = document.getElementById("points");
const levelDisplay = document.getElementById("level");
const addButton = document.getElementById("addPoints");

addButton.addEventListener("click", () => {
    points += 10;

    if (points >= level * 100) {
        level++;
        alert("🔥 Subiste de nivel!");
    }

    pointsDisplay.textContent = points;
    levelDisplay.textContent = level;
});
