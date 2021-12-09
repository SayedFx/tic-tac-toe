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
import view from "./view";
import model from "./model";

const gameController = (() => {
  const board = model.board;
  view.createView(board, (coordinates) => {
    board[coordinates.row][coordinates.col] = "X";
    view.updateView(board);
  });
})();
