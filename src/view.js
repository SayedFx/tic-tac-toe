const gameView = (() => {
  const createRow = () => {
    const row = document.createElement("div");
    row.classList.add("row");
    return row;
  };

  const createCell = (cellContent) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = cellContent;
    return cell;
  };

  const addCell = (row, cell) => {
    cell.addEventListener("click", () => (cell.innerText = "X"));
    row.appendChild(cell);
  };

  const boardView = document.querySelector(".board");

  const displayBoard = (board) => {
    board.forEach((boradRow) => {
      const row = createRow();
      boradRow.forEach((cellContent) => addCell(row, createCell(cellContent)));
      boardView.appendChild(row);
    });
  };
  return { displayBoard };
})();

export default gameView;
