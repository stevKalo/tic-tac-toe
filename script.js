// WEBSITE FLOW

// load into blank screen with new game button
// newgame button brings up modal with selections for
// game mode
// game dificulty (if mode == vs CPU)

// GAME LOGIC

function createPlayer(name, role) {
  // player factory
  // obj props
  // obj name
  // obj role (x or y)
  // score
  let role = "X";
  let score = 0;

  return { name, role, score };
}

const gameBoard = document.querySelector(".game");

window.onload = function () {
  let tileArr = [];

  function createTile(name, value) {
    const newObj = { name, value };
    tileArr.push(newObj);
    const newTile = document.createElement("div");
    newTile.id = `${name}`;
    newTile.textContent = newObj.value;
    gameBoard.appendChild(newTile);
  }

  for (let i = 1; i <= 9; i++) {
    createTile("tile" + i, "");
  }
};

// game board obj
// tiles : [tile1, tile2, ...]
//

// GAME OPTIONS MODULE
// module for changing game functinoality
// game difficulty
// game mode

// GAMEPLAY MODULE
//

const gameOptions = (function () {
  // set game type func
  // 1v1
  // easy
  // hard
  // set playerRole(player)
  // X
  // O
})();
