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
import view from "./components/view";
import model from "./components/model";
import player from "./components/player";
import turn from "./components/turn";

import "./styles/index.scss"

const gameController = (() => {
  const board = model.board;

  const winnerCheck = () => {
    //rowcheck
    for (let i = 0; i < 3; i++) {
      const row = board[i];
      const sum = row.reduce((accumlator, curr) => accumlator + curr);
      if (sum === 3 || sum === -3) return sum;
    }

    //colcheck
    for (let colIndex = 0; colIndex < 3; colIndex++) {
      let sum = 0;
      for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        sum += board[rowIndex][colIndex];
      }
      if (sum === 3 || sum === -3) return sum;
    }

    // diagonal check
    let sum = board[0][0] + board[1][1] + board[2][2];
    if (sum === 3 || sum === -3) return sum;
    sum = board[0][2] + board[1][1] + board[2][0];
    if (sum === 3 || sum === -3) return sum;

    // tie check
    return board.reduce(
      (accumlator, currentArray) =>
        accumlator && currentArray.reduce((acc, curr) => acc && curr)
    );
  };

  const O = -1;
  const X = 1;
  const Owins = -3;
  const Xwins = 3;
  const Tie = 1;

  const players = [player(O), player(X)];

  view.createView(board, (coordinates) => {
    const currnetCell = model.getCell(coordinates);

    if (!currnetCell) {
      const marker = players[turn.next()].side;
      model.setCell(coordinates, marker);
    }

    const result = winnerCheck();

    switch (result) {
      case Owins:
        console.log("O is the WINNER!");
        break;
      case Xwins:
        console.log("X is the WINNER!");
        break;
      case Tie:
        console.log("It is a TIE");
        break;
    }

    view.updateView(board);
  });
})();
