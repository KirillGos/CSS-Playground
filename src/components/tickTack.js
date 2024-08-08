import "../../styles/tickTackToe.css";

const htmlTemplate = `
<div class='display-message-wrapper'>
<div class="display-mesage-ttt">
  <h1 class="display-message_mode_title"></h1>
  <button type="button" class="display-message_resetBtn">Play Again</button>
</div>
</div>
<h1 class="tick-tack-toe_title">Tick Tack Toe</h1>
<h2 class="tick-tack-toe-sign_title">
Sign: <span class="tick-tack-toe-sign">X</span>
</h2>
<div class="tick-tack-toe_gameboard">
    ${createBoxes()}
</div>
</div>`;

let sign = "X";
const tickTack = [null, null, null, null, null, null, null, null, null];

function tickTackClick(e) {
  if (e.target.textContent == "") {
    const tickTackToeSignTitle = document.querySelector(".tick-tack-toe-sign");
    e.target.textContent = sign;
    let i = e.target.dataset.index;
    tickTack.splice(i, 1, sign);
    sign = sign === "X" ? "O" : "X";
    tickTackToeSignTitle.textContent = sign;
    e.target.dataset.sign = sign;
    checkForTickTackToeWinner();
  }
}

function checkForTickTackToeWinner() {
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
  winningComb.forEach((item) => {
    if (tickTack[item[0] - 1] !== null) {
      if (tickTack[item[1] - 1] !== null) {
        if (tickTack[item[2] - 1] !== null) {
          tickTack[item[0] - 1] === tickTack[item[1] - 1] &&
          tickTack[item[0] - 1] === tickTack[item[2] - 1]
            ? tickTackToeGameOver()
            : null;
          tickTack.every(checkDraw) ? displayDraw() : null;
        }
      }
    }
  });
}
function resetTTTGame() {
  const message = document.querySelector(".display-message-wrapper");
  document.querySelector(".tick-tack-toe-sign").textContent = "X";
  message.style.display = "none";
  tickTack.map((item, index) => tickTack.splice(index, 1, null));
  sign = "X";
  document.querySelector(".tick-tack-toe-sign").textContent = sign;
  clearTTTBoard();
}
function displayDraw() {
  const message = document.querySelector(".display-message-wrapper");
  const messageTitle = document.querySelector(".display-message_mode_title");
  message.style.display = "flex";

  messageTitle.textContent = `Draw`;
  tickTack.map((item, index) => tickTack.splice(index, 1, null));
}
function tickTackToeGameOver() {
  const message = document.querySelector(".display-message-wrapper");
  const messageTitle = document.querySelector(".display-message_mode_title");
  message.style.display = "flex";
  messageTitle.textContent = `Winner is ${sign == "X" ? "O" : "X"}`;
  tickTack.map((item, index) => tickTack.splice(index, 1, null));
  sign = "X";
}
function checkDraw(item) {
  return item !== null;
}
function clearTTTBoard() {
  const areas = document.querySelectorAll(".tick-tack-toe_area");
  areas.forEach((item) => (item.textContent = ""));
}

function crtEl(tagName, className, id, type, text) {
  const item = document.createElement(tagName);
  if (className?.length > 0) {
    item.setAttribute("class", className);
  }
  if (id?.length > 0) {
    item.setAttribute("id", id);
  }
  if (type?.length > 0) {
    item.setAttribute("type", type);
  }
  if (text?.length > 0) {
    item.textContent = text;
  }
  return item;
}
function createBoxes() {
  let templateHtml = "";
  for (let i = 0; i < 9; i++) {
    templateHtml += `<div class="tick-tack-toe_area" data-index="${i}"></div>`;
  }
  return templateHtml;
}
function addEventToBoxes() {
  const btn = document.querySelector('.display-message_resetBtn');
  btn.addEventListener('click', resetTTTGame)
  const btns = document.querySelectorAll('.tick-tack-toe_area')
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => tickTackClick(e))
  });
}
export default function TickTackToe() {
  const tickTackContainer = document.querySelector(".tick-tack-toe_container");
  tickTackContainer.innerHTML = htmlTemplate;
  addEventToBoxes()
}
