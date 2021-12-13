const model = (() => {
  const createBoard = () => [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const board = createBoard();
  const clear = () => board.map((row) => row.map((cell) => 0));

  const getCell = (coordinates) => board[coordinates.row][coordinates.col];
  const setCell = (coordinates, value) => (board[coordinates.row][coordinates.col] = value);

  return { board, getCell, setCell, clear };
})();

export default model;
