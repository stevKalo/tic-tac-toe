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
      name: "player " + i,
      role: i == 1 ? "X" : "O",
      score: 0,
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
        newObj.value = playerArr[0].role;
        newTile.textContent = newObj.value;
        checkGame();
        playerArr.reverse();
      }
    });
    // add tiles to gameboard
    gameBoard.appendChild(newTile);
  }
}

function checkGame() {
  // check condition function
  function checkCondition(a, b, c) {
    return a.value !== "" && a.value == b.value && b.value == c.value;
  }

  function checkForWin() {
    // check rows
    for (let i = 0; i < 9; i += 3) {
      if (checkCondition(tileArr[i], tileArr[i + 1], tileArr[i + 2])) {
        console.log("3 across");
        return true;
      }

      // check columns
      for (let i = 0; i < 3; i++) {
        if (checkCondition(tileArr[i], tileArr[i + 3], tileArr[i + 6])) {
          console.log("3 down");
          return true;
        }
      }
      // check diagnals
      if (
        checkCondition(tileArr[0], tileArr[4], tileArr[8]) ||
        checkCondition(tileArr[2], tileArr[4], tileArr[6])
      ) {
        console.log("3 diagnal");
        return true;
      }
    }
    // else return false
    return false;
  }
  // update score function
  function updateScore(player) {
    player.scoreDisplay.textContent = player.score;
  }

  const isWin = checkForWin();
  if (isWin) {
    ++playerArr[0].score;
    updateScore(playerArr[0]);
    alert(`${playerArr[0].name} wins!`);
  }
}

// clears board
function clearBoard() {
  tileArr = [];
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }
}

// window load event
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
