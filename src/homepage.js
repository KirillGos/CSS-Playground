let dragged;
const links = document.querySelectorAll(".navLink");
const mainPage = document.querySelector(".mainPage");

function HomePage() {
  mainPage.classList = "";
  mainPage.classList.add("homepage-style");

  return `
  <div class="homepage-css-power_description home-page-description">
      </div>
      
       <div class="homepage-to-do-app_description home-page-description">
        <div class="homepage-to-do-app_descript-container">
          <h1>To Do App</h1>
           <p>I couldn't resist adding a classic to-do-app. To do app is one of the first apps I've ever build. This to-do-app has all the basic functuanality. Also this app uses localStorage to store your todo's on your web-browser</p>
        </div>
       </div>
      
          <div class="home-page-description" >
          <div class="tick-tack-toe_description">
          <h1>Tick Tack Toe</h1>
           <p> Simple tick tack toe game. Play with someone or play against a robot.
           </p>
          </div>  
          </div>
          `;
}
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

// layout section

function Layouts() {
  mainPage.classList = "";
  mainPage.classList.add("layout-style");
  return `
  <div class="circles" ondragover="dragOverFunc(event)" ondrop="dropFunc(event)">
  ${colors.reduce((string, item) => {
    const itemDiv = populateCircles(item);
    string += itemDiv;
    return string;
  }, "")}
  </div>
  <div class="drop-box-grid">
  ${populateDropBox(9)}
  </div>
  `;
}

function populateCircles(item) {
  return `<div class="layout-wrapper" draggable='true' style=${
    "background-color:" + item
  } ondragstart="changeDragged(this)">drag</div>`;
}
function populateDropBox(amount) {
  let total = "";
  for (let i = 0; i < amount; i++) {
    total += `<div class="drop-box" ondragover="dragOverFunc(event)" ondrop="dropFunc(event)"></div>`;
  }
  return total;
}

function dropFunc(event) {
  event.target.innerHTML == false || event.target.classList.contains("circles")
    ? event.target.prepend(dragged)
    : null;
}
function changeDragged(event) {
  dragged = event;
}
function dragOverFunc(event) {
  event.preventDefault();
}
function Slide() {
  return `
    <div class="slide_container" drabbable='true' ondrag="slideItems(event)">
      <div class="slide-wrapper">
        <div class='slide-item'>
          <img src="./assets/1.jpg" alt=""/>
        </div>
        <div class='slide-item'>
          <img src="./assets/2.jpg" alt=""/>
        </div>
        <div class='slide-item'>
          <img src="./assets/3.jpg" alt=""/>
        </div>
        <div class='slide-item'>
          <img src="./assets/4.jpg" alt=""/>
        </div>
        <div class='slide-item'>
          <img src="./assets/5.jpg"  alt=""/>
        </div>
        <div class='slide-item'>
          <img src="./assets/6.jpg"  alt=""/>
        </div>
        <div class='slide-item'>
          <img src="./assets/7.jpg"  alt=""/>
        </div>
    </div>  
       
      </div>
    </div>

  `;
}
function slideItems(event) {
    console.log(event)
    event.target.scroll( )
}
function Animations() {
  return `Animations`;
}
// links section

links.forEach((link) => {
  link.addEventListener("click", () => handleLinkClick(link));
});

function handleLinkClick(link) {
  const i = +link.dataset.index;
  let html =
    i === 1
      ? HomePage()
      : i === 2
      ? Layouts()
      : i === 3
      ? Slide()
      : Animations();
  mainPage.innerHTML = html;

  if (i === 1) {
    addThroughEnter();
    loadTasks();
    document.querySelector(".header").style.display = "flex";
  } else {
    document.querySelector(".header").style.display = "none";
  }
}
function renderElemenet(element) {
  mainPage.innerHTML = element();
}
document.body.onload = () => {
  renderElemenet(Slide);
  document.querySelector(".header").style.display = "none";
  // addThroughEnter();
  // loadTasks();
};

function mainPageDrag(event) {
  const mainPageRight = findElement("homepage-to-do", ".");
  const mainPageLeft = findElement("homepage-css-power", ".");
  const cssArea = findElement("homepage-css-area", ".");
  const toDoApp = findElement("to-do-app", ".");

  if (dragged.classList.contains("homepage-css-area")) {
    if (toDoApp.parentElement.classList.contains("homepage-to-do")) {
      mainPageRight.prepend(cssArea);
      mainPageLeft.prepend(toDoApp);
    } else {
      mainPageRight.prepend(toDoApp);
      mainPageLeft.prepend(cssArea);
    }
  } else if (dragged.parentElement.classList.contains("homepage-to-do")) {
    mainPageRight.prepend(cssArea);
    mainPageLeft.prepend(toDoApp);
  } else {
    mainPageRight.prepend(toDoApp);
    mainPageLeft.prepend(cssArea);
  }
}
