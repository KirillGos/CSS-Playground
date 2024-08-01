let dragged;
const links = document.querySelectorAll(".navLink");
const mainPage = document.querySelector(".mainPage");
const colors = [
  "yellow",
  "green",
  "orange",
  "black",
  "cyan",
  "red",
  "pink",
  "brown",
  "blue",
];
const cssProperties = {
  setFont: {
    property: "font-family",
    values: ["sans-serif", "roboto", "Franklin Gothic Medium", "Arial Narrow"],
    pId: "changeFontText",
  },
  widthAndHeight: {
    property: "font-size",
    values: ["10px", "11px", "12px", "13px", "14px", "15px", "16px"],
    pId: "widthAndHeightP",
  },
  changeBGColor: {
    property: "background-color",
    values: ["red", "blue", "grey", "green", "pink", "yellow"],
    pId: "changeBgColorP",
  },
  hideAndShow: {
    property: "display",
    values: ["none", "block"],
    pId: "showAndHide",
  },
  textDecoration: {
    property: "font-weight",
    values: [600, 800, 700],
    pId: "changeDecorationP",
  },
  alignText: {
    property: "text-align",
    values: ["right", "center", "left", "end", "justify"],
    pId: "chageFontSizText",
  },
  addBorder: {
    property: "border",
    values: [
      "3px solid red",
      "3px solid blue",
      "3px solid black",
      "3px solid green",
      "3px solid pink",
      "3px solid yellow",
    ],
    pId: "addBorderP",
  },
  changeColor: {
    property: "color",
    values: ["lighred", "blue", "brown", "green", "pink", "yellow"],
    pId: "changeTextColorP",
  },
};
function counter() {
  let count = -1;
  return function (length) {
    count > +length - 1 ? (count = 0) : (count += 1);
    return count;
  };
}
const count = counter();

function changeCSS(prop) {
  let keyCopy;
  for (key in cssProperties) {
    if (key === prop) {
      keyCopy = cssProperties[key];
    }
  }
  const valuesLength = +keyCopy.values.length;
  const pElement = findElement(keyCopy.pId, "#");
  pElement.style = `${
    keyCopy.property + ":" + keyCopy.values[count(valuesLength)]
  }`;
}
function HomePage() {
  mainPage.classList = "";
  mainPage.classList.add("homepage-style");
  return `<div class="homepage-wrapper">
  
        <h1 class="hPTitle">CSS is very powerful</h1>
        <div class="cssPowerGrid">
          <div class="cssPowerBox">
            <p id="changeFontText">You can set font family</p>
            <button
              id="setFont"
              class="changeCSSBtn"
              onClick="changeCSS('setFont')"
            >
              Change
            </button>
          </div>
          <div class="cssPowerBox">
            <p id="changeBgColorP">You can change background color</p>
            <button
              id="changeBGColor"
              class="changeCSSBtn"
              onClick="changeCSS('changeBGColor')"
            >
              Change
            </button>
          </div>
          <div class="cssPowerBox">
            <p id="showAndHide">You can hide and show elements</p>
            <button
              id="hideAndShow"
              class="changeCSSBtn"
              onClick="changeCSS('hideAndShow')"
            >
              Hide
            </button>
          </div>
          <div class="cssPowerBox">
            <p id="changeDecorationP">You can change the text decoration</p>
            <button
              id="textDecoration"
              class="changeCSSBtn"
              onClick="changeCSS('textDecoration')"
            >
              Change
            </button>
          </div>
          <div class="cssPowerBox">
            <p id="addBorderP">You can add border</p>
            <button
              id="addBorder"
              class="changeCSSBtn"
              onClick="changeCSS('addBorder')"
            >
              Add Border
            </button>
          </div>
          <div class="cssPowerBox">
            <p id="widthAndHeightP">You can change width and height</p>
            <button
              id="widthAndHeight"
              class="changeCSSBtn"
              onClick="changeCSS('widthAndHeight')"
            >
              Change
            </button>
          </div>
        </div>
      </div> 

      <div class="to-do-app" > 
        <h1 class='to-do-app-title'>To Do App</h1>
          <div class="to-do-app-form">
            <label for="to-do-app-input">Enter a task:</label>
            <input type='text' placeholder="add a task" id='to-do-app-input' />
            <button class="submit-a-task" onClick="addTaskFunc(previousElementSibling)">Add</button>
          </div>
          <div class="task-list">
          </div>
      </div>
      `;
}
function randomIdGenerator() {
  return (Math.random() * 50 + Math.random() * 100).toString();
}
function TaskItem(text) {
  if (text.length > 20) {
    alert("Too much text");
    return false;
  }

  if (text.length === 0) {
    alert("Enter text");
    return false;
  }
  const taskItem = crtEl("div", "task-item", randomIdGenerator());
  const taskRight = crtEl("div", "task-right");
  const input = crtEl("input", "task-checkbox", "", "checkbox");
  const taskText = crtEl("div", "task-text");

  taskRight.append(input, taskText);

  const taskAction = crtEl("div", "task-action task-left");
  const editTaskBtn = crtEl("button", "task-edit-action", "", "", "Edit");
  const delTaskBtn = crtEl("button", "task-delete-action", "", "", "X");
  taskAction.append(editTaskBtn, delTaskBtn);

  taskItem.append(taskRight, taskAction);
  return {taskItem, taskText};
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


function addTaskFunc(inputEl) {
  const taskTextInput = inputEl.value;
  const taskObj = TaskItem(taskTextInput);
  if (taskObj == false) {
    inputEl.value = "";
    return;
  }
  const taskList = findElement("task-list", ".");
  taskObj.taskText.textContent = taskTextInput;
  taskList.append(taskObj.taskItem);
  inputEl.value = "";
}

function addThroughEnter() {
  const element = findElement("to-do-app-input", "#");
  element.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      addTaskFunc(element);
    }
  });
}
function findElement(element, sign) {
  return document.querySelector(`${sign + element}`);
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
renderElemenet(HomePage);
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
function changeDragged(e) {
  dragged = e;
}
function dragOverFunc(event) {
  event.preventDefault();
}
function Tables() {
  return `Tables`;
}
function Animations() {
  return `Animations`;
}

links.forEach((link) => {
  link.addEventListener("click", () => handleLinkClick(link));
});

function handleLinkClick(link) {
  const i = +link.dataset.index;
  mainPage.innerHTML =
    i === 1
      ? HomePage()
      : i === 2
      ? Layouts()
      : i === 3
      ? Tables()
      : Animations();

  i === 1 ? addThroughEnter() : null;
}
function renderElemenet(element) {
  mainPage.innerHTML = element();
}
document.body.onload = addThroughEnter();