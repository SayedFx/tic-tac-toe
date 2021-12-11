import cell from "./cell";

const view = (() => {
  const boardCells = [];
  const createRow = () => {
    const row = document.createElement("div");
    row.classList.add("board-row");
    return row;
  };

  const boardView = document.querySelector(".board");
  const markCell = (element, value) => {
    const marker = value === 0 ? "" : value === -1 ? "O" : "X";
    element.innerText = marker;
  };

  const createView = (board, viewChangeListener) => {
    board.forEach((boradRow, rowIndex) => {
      const row = createRow();
      const boardCellsRow = [];
      boardCells.push(boardCellsRow);
      boradRow.forEach((cellContent, colIndex) => {
        const cellObject = cell(rowIndex, colIndex);
        boardCellsRow.push(cellObject);
        cellObject.addClickHandler(viewChangeListener);
        markCell(cellObject.element, cellContent);
        row.appendChild(cellObject.element);
      });
      boardView.appendChild(row);
    });
  };

  const updateView = (board) => {
    board.forEach((boradRow, rowIndex) => {
      boradRow.forEach((cellContent, colIndex) => {
        const element = boardCells[rowIndex][colIndex].element;
        markCell(element, cellContent);
      });
    });
  };

  return { createView, updateView };
})();

export default view;
