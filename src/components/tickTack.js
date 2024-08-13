import "../../styles/tickTackToe.css";

const htmlTemplate = `
<div class="tick-tack-toe_container">
<div class='display-message-wrapper'>
<div class="display-mesage-ttt">
  <h1 class="display-message_mode_title"></h1>
  <button type="button" class="display-message_resetBtn">Play Again</button>
</div>
</div>
<h1 class="tick-tack-toe_title">Tick Tack Toe</h1>
<div class="tick-tack-toe-sign_title">
<h1>Sign: <span class="tick-tack-toe-sign">X</span></h1>
<h1>Move: <span class="tick-tack-toe_move">You</span>
</div>
<div class="tick-tack-toe_gameboard">
    ${createBoxes()}
</div>
</div>
</div>`;
let move = "You";
let sign = "X";
let draw = false;
const tickTack = [null, null, null, null, null, null, null, null, null];

function tickTackClick(e) {
  if (move !== "You") return;
  if (e.target.textContent == "") {
    const tickTackToeSignTitle = document.querySelector(".tick-tack-toe-sign");
    e.target.textContent = sign;
    let i = e.target.dataset.index;
    tickTack.splice(i, 1, sign);
    if (checkForTickTackToeWinner()) {
      return;
    } else {
      sign = sign === "X" ? "O" : "X";
      tickTackToeSignTitle.textContent = sign;
      e.target.dataset.sign = sign;
      move === "You" ? randomMove() : null;
    }
  }
}

function checkForTickTackToeWinner() {
  let win = false;
  // by default win is false
  // possible winning combinations
  const winningComb = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [7, 5, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  // loop through winning combinations and check whether the current state satisfies a condition. If it does we'll end this game by calling the tickTackToeGameOver function. If it doesn't we'll set the finish variable to false and we'll call checkDraw function which we'll return a boolean, if we'll receive true, meaning every box is filled, then we'll call displayDraw function
  winningComb.forEach((item) => {
    if (tickTack[item[0] - 1] !== null) {
      if (tickTack[item[1] - 1] !== null) {
        if (tickTack[item[2] - 1] !== null) {
          if (
            tickTack[item[0] - 1] === tickTack[item[1] - 1] &&
            tickTack[item[0] - 1] === tickTack[item[2] - 1]
          ) {
            tickTackToeGameOver();
            win = true;
          }
        }
      }
    } else {
      win = false;
      if (tickTack.every(checkDraw)) {
        displayDraw();
      }
    }
  });
  return win;
}
// reset the game
function resetTTTGame() {
  const message = document.querySelector(".display-message-wrapper");
  document.querySelector(".tick-tack-toe-sign").textContent = "X";
  message.style.display = "none";
  tickTack.map((item, index) => tickTack.splice(index, 1, null));
  sign = "X";
  document.querySelector(".tick-tack-toe-sign").textContent = sign;
  clearTTTBoard();
}
// display draw
function displayDraw() {
  const message = document.querySelector(".display-message-wrapper");
  const messageTitle = document.querySelector(".display-message_mode_title");
  message.style.display = "flex";

  messageTitle.textContent = `Draw`;
  tickTack.map((item, index) => tickTack.splice(index, 1, null));
  draw = true;
  move = "You";
  win = false;
}
function tickTackToeGameOver() {
  // display a message indicating the winner and reset game logic
  const message = document.querySelector(".display-message-wrapper");
  const messageTitle = document.querySelector(".display-message_mode_title");
  message.style.display = "flex";
  messageTitle.textContent = `Winner is ${move == "You" ? "You" : "Robot"}`;
  tickTack.map((item, index) => tickTack.splice(index, 1, null));
  sign = "X";
  move = "You";
}
function checkDraw(item) {
  return item !== null;
}
function clearTTTBoard() {
  const areas = document.querySelectorAll(".tick-tack-toe_area");
  areas.forEach((item) => (item.textContent = ""));
}

function createBoxes() {
  let templateHtml = "";
  for (let i = 0; i < 9; i++) {
    templateHtml += `<div class="tick-tack-toe_area" data-index="${i}"></div>`;
  }
  return templateHtml;
}
function addEventToBoxes() {
  const btn = document.querySelector(".display-message_resetBtn");
  btn.addEventListener("click", resetTTTGame);
  const btns = document.querySelectorAll(".tick-tack-toe_area");
  btns.forEach((btn) => {
    btn.addEventListener("click", tickTackClick);
  });
}
export default function TickTackToe() {
  move = "You";
  const tickTackContainer = document.querySelector(".tick-tack-game");
  tickTackContainer.innerHTML = htmlTemplate;
  addEventToBoxes();
}

function randomMove() {
  // update and display the move to robot
  move = "Robot";
  const displayMove = document.querySelector(".tick-tack-toe_move");
  displayMove.textContent = move;

  // set a timeout for dipslaying a choice
  setTimeout(() => {
    // loop through tickTack array to find the empty boxes
    let freeSpaces = [];
    tickTack.forEach((item, index) => {
      if (item === null) {
        freeSpaces.push(index);
      }
    });
    // select a random box from the freeSpaces array
    const randomIndex = Math.floor(Math.random() * freeSpaces.length);
    const randomPlace = +freeSpaces[randomIndex];

    // assing and display that boxes value to the current sign
    tickTack.splice(randomPlace, 1, sign);
    const item = document.querySelector(`div[data-index='${randomPlace}']`);
    item.textContent = sign;

    // check for a winner. This check winner function returns a boolean indicating the state of the game. If it's true we'll exit the function, if it's false we'll continue the game. To continue the game we'll need to change the move and the sign as well as we'll need to update the interface.
    if (checkForTickTackToeWinner()) {
      return;
    } else if (draw === false) {
      move = "You";
      displayMove.textContent = move;
      sign = sign === "X" ? "O" : "X";
      const tickTackToeSignTitle = document.querySelector(
        ".tick-tack-toe-sign"
      );
      tickTackToeSignTitle.textContent = sign;
    }
  }, 1000);
}
