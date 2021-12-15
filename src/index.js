// move related parts to veiw.js
// get input values and assign them to players
import "./index.html";
import "./styles/index.scss";
import controller from "./components/controller";
const display = document.querySelector(".display");
const start = document.querySelector(".start");
const board = document.querySelector(".board");
const playerO = document.querySelector("#player-o");
const playerX = document.querySelector("#player-x");
const playerToStart = document.querySelector("#first-player");
const randSideButton = document.querySelector("#side-generator");

randSideButton.addEventListener("click", () => {
  playerToStart.value = ["O", "X"][Math.floor(Math.random() * 2)];
});

controller.stateListers.push((state) => {
  let message;
  switch (state) {
    case "O":
      message = `${controller.players.o.name} is the WINNER!`;
      break;
    case "X":
      message = `${controller.players.x.name} is the WINNER!`;
      break;
    case "T":
      message = `It is a TIE!`;
      break;
    case "CONTINUE":
      message = `Please continue playing`;
      break;
  }
  display.innerHTML = message;
  board.classList.add("board-disabled");
  board.classList.add("text-muted");
});

start.addEventListener("click", (e) => {
  controller.clear();

  const playerOName = playerO.value === "" ? "Player O" : playerO.value;
  const playerXName = playerX.value === "" ? "Player X" : playerX.value;
  playerX.value = playerXName;
  playerO.value = playerOName;
  controller.players.o.name = playerOName;
  controller.players.x.name = playerXName;

  if (playerToStart.value) controller.players.setStartingPlayer(playerToStart.value);
  else playerToStart.value = "X";

  board.classList.remove("board-disabled");
  display.innerHTML = `Player ${playerToStart.value} starts. Goodluck!`;
  start.innerHTML = "Restart";
  e.preventDefault();
});
