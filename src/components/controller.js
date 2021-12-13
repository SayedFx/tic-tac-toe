import view from "./view";
import model from "./model";
import turn from "./turn";
import player from "./player";
import winnerCheck from "./winnerCheck";

const controller = (() => {
  let state = "CONTINUE";
  let oldState = "CONTINUE";
  let stateListers = [];

  const viewChangeListener = (coordinates) => {
    const O = -1;
    const X = 1;
    const players = [player(O), player(X)];

    const currnetCellSet = model.getCell(coordinates);
    if (!currnetCellSet) {
      const marker = players[turn.next()].side;
      model.setCell(coordinates, marker);
    }

    const Owins = -3;
    const Xwins = 3;
    const Tie = 1;
    const result = winnerCheck();

    switch (result) {
      case Owins:
        state = "O";
        break;
      case Xwins:
        state = "X";
        break;
      case Tie:
        state = "T";
        break;
      default:
        state = "CONTINUE";
    }
    view.updateView(model.board);
    updateStateListeners();
  };

  const updateStateListeners = () => {
    if (oldState !== state) {
      stateListers.forEach((listener) => listener(oldState, state));
      oldState = state;
    }
  };

  const clear = () => {
    model.clear();
    view.updateView(model.board);
  };
  view.createView(model.board, viewChangeListener);

  return { stateListers, clear };
})();

export default controller;
