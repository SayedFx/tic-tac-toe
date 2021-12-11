const model = (() => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const getCell = (coordinates) => board[coordinates.row][coordinates.col];
  const setCell = (coordinates, value) =>
    (board[coordinates.row][coordinates.col] = value);

  return { board, getCell, setCell };
})();

export default model;
