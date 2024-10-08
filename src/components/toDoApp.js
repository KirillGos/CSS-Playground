import '../../styles/to-do-app-style.css';

const htmlTemplate =   `
<div class="to-do-app"> 
  <h1 class='to-do-app-title'>To Do App</h1>
    <div class="to-do-app-form">
      <p for="to-do-app-input">Enter a task:</p>
      <span class="to-do-app-form-el">
        <input type='text' placeholder="add a task" id='to-do-app-input' />
        <button class="submit-a-task" type="button">Add</button>
      </span>
    </div>
      <div class="task-list">
      </div>
    </div>
`

function addTaskFunc() {
  const inputEl = document.querySelector('#to-do-app-input')
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

function randomIdGenerator() {
  return (Math.random() * 50 + Math.random() * 100).toString();
}
function insertHtml(element, html) {
  element.innerHTML = html;
}
export default  function ToDoApp() {
  const homePageToDo = document.querySelector('.homepage-to-do');
  insertHtml(homePageToDo, htmlTemplate);
  
  const btn = document.querySelector('.submit-a-task');
  
  btn.addEventListener('click', addTaskFunc);
  addThroughEnter();
  loadTasks();
}