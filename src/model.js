const model = (() => {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const getCell = (coordinates) => board[coordinates.row][coordinates.col];
  const setCell = (coordinates, value) =>
    (board[coordinates.row][coordinates.col] = value);

  return { board, getCell, setCell };
})();

export default model;
