import "../../styles/layout.css";
let dragged;
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
const htmlTemplate = `
    <div class="circles">
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
export default  function Layout() {
  try {
    mainPage.classList = "";
    mainPage.classList.add("layout-style");
    mainPage.innerHTML = htmlTemplate;
  
    const circles = document.querySelectorAll('.layout-wrapper');
    const dropBoxes = document.querySelectorAll('.drop-box');
    const array = [...circles, ...dropBoxes];
    console.log(array)
    circles.forEach(item => 
      item.addEventListener('dragstart', (event) => changeDragged(event))
    )
    array.forEach(item => {
      item.addEventListener('dragover',(event) => dragOverFunc(event));
      item.addEventListener('drop',(event) => dropFunc(event));
    });

  } catch(error) {
    console.log(error);
  }
}

function populateCircles(item) {
  return `<div class="layout-wrapper" draggable='true' style=${
    "background-color:" + item
  }>drag</div>`;
}
function populateDropBox(amount) {
  let total = "";
  for (let i = 0; i < amount; i++) {
    total += `<div class="drop-box"></div>`;
  }
  return total;
}

function dropFunc(event) {
  event.target.innerHTML == false || event.target.classList.contains("circles")
    ? event.target.prepend(dragged)
    : null;
}
function changeDragged(event) {
  dragged = event.target ;
}
function dragOverFunc(event) {
  event.preventDefault();
}
