import "../../styles/changeCSS.css";
const htmlTemplate =  `
<div class="homepage-css-area">
      <h1class="hPTitle">CSS is very powerful</h1>
      <div class="cssPowerGrid">  
        <div class="cssPowerBox">
          <p id="changeFontText">You can set font family</p>
          <button
            id="setFont"
            class="changeCSSBtn"
          >
            Change
          </button>
        </div>
        <div class="cssPowerBox">
          <p id="changeBgColorP">You can change background color</p>
          <button
            id="changeBGColor"
            class="changeCSSBtn"
          >
            Change
          </button>
        </div>
        <div class="cssPowerBox">
          <p id="showAndHide">You can hide and show elements</p>
          <button
            id="hideAndShow"
            class="changeCSSBtn"
          >
            Hide
          </button>
        </div>
        <div class="cssPowerBox">
          <p id="changeDecorationP">You can change text weight</p>
          <button
            id="textDecoration"
            class="changeCSSBtn"
          >
            Change
          </button>
        </div>
        <div class="cssPowerBox">
          <p id="addBorderP">You can add border</p>
          <button
            id="addBorder"
            class="changeCSSBtn"
          >
            Add Border
          </button>
        </div>
        <div class="cssPowerBox">
          <p id="widthAndHeightP">You can change width and height</p>
          <button
            id="widthAndHeight"
            class="changeCSSBtn"
          >
            Change
          </button>
        </div>
      </div>`;

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
const count = counter();

function findElement(element, sign) {
  return document.querySelector(`${sign + element}`);
}
export function changeCSS(prop) {
  let keyCopy;
  for (let key in cssProperties) {
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

function counter() {
  let count = -1;
  return function (length) {
    count > +length - 1 ? (count = 0) : (count += 1);
    return count;
  };
}
function addBtnAction() {
  const btns = document.querySelectorAll(".changeCSSBtn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => changeCSS(btn.id));
  });
}
export default function cssPower() {
  const homePageArea = document.querySelector(".homepage-css-power");
  homePageArea.innerHTML = htmlTemplate;
  addBtnAction();
}
