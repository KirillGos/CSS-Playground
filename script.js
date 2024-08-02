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
  return `
    <div class="homepage-left">
  <div class="homepage-css-area" draggable="true" ondragover="dragOverFunc(event)" ondrop="mainPageDrag(event)"  ondragstart="changeDragged(this)">
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
            <p id="changeDecorationP">You can change text weight</p>
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
      </div>
      <div class="homepage-right">
      <div class="to-do-app"  draggable="true"  ondragover="dragOverFunc(event)" ondrop="mainPageDrag(event)" ondragstart="changeDragged(this)"> 
        <h1 class='to-do-app-title'>To Do App</h1>
          <div class="to-do-app-form">
            <p for="to-do-app-input">Enter a task:</p>
            <span class="to-do-app-form-el">
              <input type='text' placeholder="add a task" id='to-do-app-input' />
              <button class="submit-a-task" type="button" onClick="addTaskFunc(previousElementSibling)">Add</button>
            </span>
          </div>
          <div class="task-list">
          </div>
          </div>
          </div>
          `;
}
function randomIdGenerator() {
  return (Math.random() * 50 + Math.random() * 100).toString();
}
function TaskItem({ text, id, isChecked }) {
  const taskItem = crtEl("div", "task-item", id);
  const taskRight = crtEl("div", "task-right");
  const checkBox = crtEl("input", "task-checkbox", "", "checkbox");
  const taskText = crtEl("div", "task-text");
  taskText.textContent = text;
  if (isChecked === true) {
    taskText.style = "text-decoration: line-through;";
    checkBox.checked = true;
  }
  taskRight.append(checkBox, taskText);

  const taskAction = crtEl("div", "task-action task-left");
  const editTaskBtn = crtEl("button", "task-edit-action", "", "", "Edit");
  const delTaskBtn = crtEl("button", "task-delete-action", "", "", "X");

  editTaskBtn.addEventListener("click", (e) => editTask(e));
  delTaskBtn.addEventListener("click", (e) => deleteTask(e));
  checkBox.addEventListener("click", (e) => checkTask(e));

  taskAction.append(editTaskBtn, delTaskBtn);
  taskItem.append(taskRight, taskAction);
  return taskItem;
}
function checkTask(e) {
  const taskId = e.target.parentElement.parentElement.id;
  const tasksArr = JSON.parse(localStorage.tasks);
  let index;
  tasksArr.forEach((item, i) => {
    if (item.id === taskId) {
      index = i;
    }
  });
  tasksArr[index].isChecked = !tasksArr[index].isChecked;
  localStorage.tasks = JSON.stringify(tasksArr);
  loadTasks();
}
function editTask(e) {
  const taskId = e.target.parentElement.parentElement.id;
  const taskTextInput = findElement("to-do-app-input", "#");
  let index;
  const theTask = JSON.parse(localStorage.tasks).filter((item, i) => {
    if (item.id === taskId) {
      index = i;
      return item;
    }
  });
  taskTextInput.value = theTask[0].text;
  const tasksArr = JSON.parse(localStorage.tasks);
  tasksArr.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
  loadTasks();
}
function deleteTask(e) {
  const taskId = e.target.parentElement.parentElement.id;
  const tasksArr = JSON.parse(localStorage.tasks);
  let index;
  const theTask = JSON.parse(localStorage.tasks).filter((item, i) => {
    if (item.id === taskId) {
      index = i;
      return item;
    }
  });
  tasksArr.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksArr));
  loadTasks();
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
  if (taskTextInput.length > 37) {
    alert("Too much text");
    return false;
  }
  if (taskTextInput.length === 0) {
    alert("Enter text");
    return false;
  }
  if (localStorage.tasks == undefined) {
    localStorage.tasks = "[]";
  }
  const taskItem = JSON.parse(localStorage.tasks);
  taskItem.push({
    text: taskTextInput,
    id: randomIdGenerator(),
    isChecked: false,
  });
  localStorage.setItem("tasks", JSON.stringify(taskItem));

  const taskList = findElement("task-list", ".");
  taskList.innerHTML = "";
  taskItem.forEach((item) => {
    taskList.append(TaskItem(item));
  });
  inputEl.value = "";
}
function loadTasks() {
  if (localStorage.tasks == undefined) {
    localStorage.tasks = "[]";
  }
  const taskItem = JSON.parse(localStorage.tasks);
  const taskList = findElement("task-list", ".");
  taskList.innerHTML = "";
  taskItem.forEach((item) => {
    taskList.append(TaskItem(item));
  });
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
function Tables() {
  return `Tables`;
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
  mainPage.innerHTML =
    i === 1
      ? HomePage()
      : i === 2
      ? Layouts()
      : i === 3
      ? Tables()
      : Animations();

  if (i === 1) {
    addThroughEnter();
    loadTasks();
  }
}
function renderElemenet(element) {
  mainPage.innerHTML = element();
}
document.body.onload = () => {
  renderElemenet(HomePage);
  addThroughEnter();
  loadTasks();
};

function mainPageDrag(event) {
  const mainPageRight = findElement("homepage-right", ".");
  const mainPageLeft = findElement("homepage-left", ".");
  const cssArea = findElement("homepage-css-area", ".");
  const toDoApp = findElement("to-do-app", ".");

  if (dragged.classList.contains("homepage-css-area")) {
    if (toDoApp.parentElement.classList.contains("homepage-right")) {
      mainPageRight.prepend(cssArea);
      mainPageLeft.prepend(toDoApp);
    } else {
      mainPageRight.prepend(toDoApp);
      mainPageLeft.prepend(cssArea);
    }
  } else if (dragged.parentElement.classList.contains("homepage-right")) {
    mainPageRight.prepend(cssArea);
    mainPageLeft.prepend(toDoApp);
  } else {
    mainPageRight.prepend(toDoApp);
    mainPageLeft.prepend(cssArea);
  }
}
