import cell from "./cell";
import controller from "./controller";

const view = (() => {
  const boardView = document.querySelector(".board");
  const display = document.querySelector(".display");
  const start = document.querySelector(".start");
  const ai = document.querySelector(".ai");
  const playerO = document.querySelector("#player-o");
  const playerX = document.querySelector("#player-x");
  const playerToStart = document.querySelector("#first-player");
  const randSideButton = document.querySelector("#side-generator");
  const boardCells = [];

  ai.addEventListener("click", () => {
    controller.activateAI();
  });
  randSideButton.addEventListener("click", () => {
    playerToStart.value = ["O", "X"][Math.floor(Math.random() * 2)];
  });

  const gameStateChangeListener = (state) => {
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
    boardView.classList.add("board-disabled");
    boardView.classList.add("text-muted");
  };

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

    boardView.classList.remove("board-disabled");
    display.innerHTML = `Player ${playerToStart.value} starts. Goodluck!`;
    start.innerHTML = "Restart";
    e.preventDefault();
  });

  const createRow = () => {
    const row = document.createElement("div");
    row.classList.add("board-row");
    return row;
  };

  const markCell = (element, value) => {
    const marker = value === 0 ? "" : value === -1 ? "O" : "X";
    element.innerText = marker;
  };

  const createView = (board, viewChangeListener) => {
    board.forEach((boradRow, rowIndex) => {
      const row = createRow();
      const boardCellsRow = [];
      boardCells.push(boardCellsRow);
      boradRow.forEach((cellContent, colIndex) => {
        const cellObject = cell(rowIndex, colIndex);
        boardCellsRow.push(cellObject);
        cellObject.addClickHandler(viewChangeListener);
        markCell(cellObject.element, cellContent);
        row.appendChild(cellObject.element);
      });
      boardView.appendChild(row);
    });
  };

  const updateView = (board) => {
    board.forEach((boradRow, rowIndex) => {
      boradRow.forEach((cellContent, colIndex) => {
        const element = boardCells[rowIndex][colIndex].element;
        markCell(element, cellContent);
      });
    });
  };

  return { createView, updateView, gameStateChangeListener };
})();

export default view;
