import player from "./player";

const players = (() => {
  const o = player("O");
  const x = player("X");
  let nextPlayer = o;
  const setStartingPlayer = (mark) => {
    nextPlayer = mark.toUpperCase() === "O" ? x : o;
  };
  const next = () => {
    nextPlayer = nextPlayer === o ? x : o;
    return nextPlayer;
  };
  return { o, x, next, setStartingPlayer };
})();

export default players;
