// move related parts to veiw.js
// get input values and assign them to players
import "./index.html";
import "./styles/index.scss";
import controller from "./components/controller";
const display = document.querySelector(".display");
const start = document.querySelector(".start");
const board = document.querySelector(".board");
let xPlayer = "X";
let oPlayer = "O";

controller.stateListers.push((oldState, newState) => {
  display.innerHTML = `oldState: ${oldState} newState: ${newState}`;
  board.classList.add("board-disabled");
  board.classList.add("text-muted");
});

start.addEventListener("click", (e) => {
  controller.clear();
  board.classList.remove("board-disabled");
  display.innerHTML = "Good luck!";
  start.innerHTML = "Restart";
  e.preventDefault();
});
