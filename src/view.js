import cell from "./cell";

const view = (() => {
  const boardCells = [];
  const createRow = () => {
    const row = document.createElement("div");
    row.classList.add("row");
    return row;
  };

  const boardView = document.querySelector(".board");

  const createView = (board, viewChangeListener) => {
    board.forEach((boradRow, rowIndex) => {
      const row = createRow();
      const boardCellsRow = [];
      boardCells.push(boardCellsRow);
      boradRow.forEach((cellContent, colIndex) => {
        const cellObject = cell(rowIndex, colIndex);
        boardCellsRow.push(cellObject);
        cellObject.addClickHandler(viewChangeListener);
        cellObject.element.innerText = cellContent;
        row.appendChild(cellObject.element);
      });
      boardView.appendChild(row);
    });
  };

  const updateView = (board) => {
    board.forEach((boradRow, rowIndex) => {
      boradRow.forEach((cellContent, colIndex) => {
        boardCells[rowIndex][colIndex].element.innerText = cellContent;
      });
    });
  };

  return { createView, updateView };
})();

export default view;
