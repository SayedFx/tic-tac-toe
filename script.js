//create gameboard object
//create player object
//store player array inside gameboard object
//create game controller object
//least possible global code
//use module pattern or factory pattern
//factory pattern is a function that returns a closure as an object
//module pattern is a factory in the form of ieef
//Use module pattern if you a singleton is required
//Use factory pattern if multiple objects of a type is required

const gameModel = (() => {
  const board = [
    ["O", "O", "X"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ];

  return { board };
})();

const gameView = (() => {
  const boardView = document.querySelector(".board");
  const displayBoard = (board) => {
    let boardViewContent = "";
    board.forEach((row, rowIndex) => {
      boardViewContent += '<div class="row">';
      row.forEach(
        (cell, cellIndex) =>
          (boardViewContent += `<div class="cell" data-row=${rowIndex} data-column=${cellIndex}>${cell}</div>`)
      );

      boardViewContent += "</div>";
    });
    boardView.innerHTML = boardViewContent;
  };
  return { displayBoard };
})();

const gameController = (() => {
  gameView.displayBoard(gameModel.board);
})();
