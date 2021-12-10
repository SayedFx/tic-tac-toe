const cell = (rowIndex, colIndex) => {
  let clickHandlers = [];

  const row = rowIndex;
  const col = colIndex;

  const createCell = () => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => {
      clickHandlers.forEach((handler) => handler({ row, col }));
    });
    return cell;
  };

  const element = createCell();
  const addClickHandler = (handler) => clickHandlers.push(handler);

  return { row, col, element, addClickHandler };
};

export default cell;
