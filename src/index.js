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
import player from "./player";
import turn from "./turn";

import "./style.css";

const gameController = (() => {
  const board = model.board;
  const players = [player("O"), player("X")];

  view.createView(board, (coordinates) => {
    model.getCell(coordinates) === ""
      ? model.setCell(coordinates, players[turn.next()].side)
      : null;
    view.updateView(board);
  });
})();
