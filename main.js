const names = ["GRAPPLES", "BOSS HUNT", "QUESTIONS"];
const descs = ["FIGHTING GAME", "BOSS BATTLE GAME", "HORROR GAME"];
const gifs = ["./gifGRAPLLES.gif", "./BossGif.gif", "./questionsGif.gif"];

let index = 0;

function updateHero() {
    const gameNameEl = document.getElementById("gameName");
    const gameDescEl = document.getElementById("gameDesc");
    const heroEl = document.getElementById("hero");

    if (gameNameEl) gameNameEl.textContent = names[index];
    if (gameDescEl) gameDescEl.textContent = descs[index];
    if (heroEl) {
        heroEl.style.backgroundImage =
            `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${gifs[index]})`;
    }

    index = (index + 1) % names.length;
}

window.addEventListener("DOMContentLoaded", () => {
    updateHero();
    setInterval(updateHero, 5000);
});

