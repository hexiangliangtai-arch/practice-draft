const button = document.querySelector("button");
const inputscreen = document.querySelector(".inputscreen");
const resultscreen = document.querySelector(".resultscreen");
const input = document.querySelector("input");
const player = document.querySelector(".player");

button.addEventListener("click", () => {
    const playerName = input.value;
    player.textContent = playerName;
   
    inputscreen.style.display = "none";
    resultscreen.style.display = "block";
});


