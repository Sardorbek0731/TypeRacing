const input = document.getElementById("value-input");
const word = document.querySelector("#random-text");
const formCreate = document.querySelector("#form-create");
const timeEl = document.getElementById("time");
const newGame = document.getElementById("new-game");
const letsGo = document.querySelector("#lets--go");
const newGameBtn = document.getElementById("new-game--btn");
const letsGoBtn = document.querySelector("#lets--go-btn");
const scoreEl = document.querySelector("#score");

letsGoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  word.classList.remove("hidden");
  timeEl.classList.remove("hidden");
  letsGo.classList.add("hidden");

  function updatime() {
    time--;
    timeEl.textContent = `Time: ${time} s`;

    if (time <= 0) {
      clearInterval(timeInterval);
      formCreate.classList.add("hidden");
      word.classList.add("hidden");
      timeEl.classList.add("hidden");
      letsGo.classList.add("hidden");
      newGame.classList.remove("hidden");
    }
    if (time <= 10) {
      timeEl.style.color = "red";
    }
  }
  const timeInterval = setInterval(updatime, 1000);
});

let score = 0;
let time = 60;
let randomWord;

const words = [
  "relieve",
  "place",
  "temporary",
  "pop",
  "star",
  "factor",
  "sigh",
  "other",
  "promise",
  "take",
  "contrast",
  "spread",
  "count",
  "privilege",
  "ego",
  "leader",
  "deadly",
  "slump",
  "faithful",
  "steam",
  "burn",
  "inquiry",
  "admire",
  "middle",
  "troop",
  "marine",
  "posture",
  "diet",
  "pudding",
  "small",
  "advertising",
  "transparent",
  "econobox",
  "locate",
  "looting",
  "dimension",
  "chapter",
  "research",
  "cage",
];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

function addToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
addToDom();

newGameBtn.addEventListener("click", (e) => {
  letsGo.classList.remove("hidden");
  formCreate.classList.remove("hidden");
  newGame.classList.add("hidden");
});

input.addEventListener("input", (e) => {
  input.style.borderBottom = "4px solid rgb(11, 189, 174)";
  const typedText = e.target.value;

  if (typedText === randomWord) {
    updateScore();
    e.target.value = "";
    addToDom();
  }
});
