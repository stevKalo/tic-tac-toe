// WEBSITE FLOW

// load into blank screen with new game button
// newgame button brings up modal with selections for
// game mode
// game dificulty (if mode == vs CPU)

// GLOBAL VARIABLES
const gameBoard = document.querySelector(".game");
const newGame = document.querySelector(".newGame");
let tileArr = [];
let playerArr = [];

// create player factory
function createPlayers() {
  for (let i = 1; i < 3; i++) {
    const player = {
      name: "player" + i,
      role: i == 1 ? "X" : "O",
      nameDisplay: document.querySelector(`#p${i}-name`),
      scoreDisplay: document.querySelector(`#p${i}-score`),
    };
    playerArr.push(player);
  }
}

// create board
function createBoard() {
  for (let i = 1; i <= 9; i++) {
    // make tile obj
    const name = "tile" + i;
    const value = "";
    const newObj = { name, value };
    tileArr.push(newObj);
    // make tile divs
    const newTile = document.createElement("div");
    newTile.id = `${name}`;
    newTile.classList.add("tile");
    newTile.textContent = newObj.value;
    // add functionality to tiles
    newTile.addEventListener("mousedown", () => {
      if (newTile.textContent == "") {
        newTile.textContent = playerArr[0].role;
        checkGame();
        playerArr.reverse();
      }
    });
    // add tiles to gameboard
    gameBoard.appendChild(newTile);
  }
}

function checkGame() {}
// clears board
function clearBoard() {
  tileArr = [];
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }
}

// make players on window load
window.onload = () => {
  clearBoard();
  createPlayers();
  createBoard();
};

// add functionality to new game button
newGame.addEventListener("mousedown", () => {
  // create 9 tiles
  clearBoard();
  createBoard();
});

// GAME OPTIONS MODULE
// module for changing game functinoality
// game difficulty
// game mode
// GAMEPLAY MODULE
// const gameOptions = (function () {
//   // set game type func
//   // 1v1
//   // easy
//   // hard
//   // set playerRole(player)
//   // X
//   // O
// })();
