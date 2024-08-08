import '../../styles/layout.css'
let dragged;

function Layout() {
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