import view from "./view";
import model from "./model";
import players from "./players";
import winnerCheck from "./winnerCheck";

const controller = (() => {
  let state = "CONTINUE";
  let oldState = "CONTINUE";
  let stateListeners = [];

  const viewChangeListener = (coordinates) => {
    const currnetCellSet = model.getCell(coordinates);
    if (!currnetCellSet) {
      const mark = players.next().mark === "X" ? 1 : -1;
      model.setCell(coordinates, mark);
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
      stateListers.forEach((listener) => listener(state));
      oldState = state;
    }
  };

  const clear = () => {
    model.clear();
    oldState = "CONTINUE";
    state = "CONTINUE";
    view.updateView(model.board);
  };
  view.createView(model.board, viewChangeListener);

  return { stateListeners, clear, players };
})();

export default controller;
