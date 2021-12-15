const model = (() => {
  const createBoard = () => [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const board = createBoard();
  const clear = () =>
    board.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => (board[rowIndex][cellIndex] = 0));
    });

  const getCell = (coordinates) => board[coordinates.row][coordinates.col];
  const setCell = (coordinates, value) => (board[coordinates.row][coordinates.col] = value);

  return { board, getCell, setCell, clear };
})();

export default model;
