//create gameboard object
//create player object
//store player array inside gameboard object
//create game controller object
//least possible global code
//use module pattern or factory pattern
//factory pattern is a function that returns a closure as an object
//module pattern is a factory in the form of ieef
//Use module pattern if you a singleton is required
//Use factory pattern if multiple objects of a type is required

const gameModel = (() => {
  const board = [
    ["O", "O", "X"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ];

  return { board };
})();

const gameView = (() => {
  const createRow=()=> {
    const row=document.createElement('div')
    row.classList.add('row')
    return row
  }

  const createCell=(cellContent)=>{
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.innerText=cellContent
    return cell;
  }

  const addCell =(row,cell)=>{
        cell.addEventListener('click',()=> cell.innerText='X')
        row.appendChild(cell)
  }

  const boardView = document.querySelector(".board");

  const displayBoard = (board) => {
    board.forEach((boradRow) => {
      const row = createRow()
      boradRow.forEach( (cellContent) =>addCell(row,createCell(cellContent)) );
    boardView.appendChild(row)
    });
  };
  return { displayBoard };
})();

const gameController = (() => {
  gameView.displayBoard(gameModel.board);
})();
