import model from "./model";

const winnerCheck = () => {
  const board = model.board;
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
  return board.flat().filter((val) => val !== 0).length === 9 ? 1 : 0;
};
export default winnerCheck;
