import "../styles/changeCSS.css";

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
const count = counter();

function findElement(element, sign) {
  return document.querySelector(`${sign + element}`);
}
export function changeCSS(prop) {
  console.log();
  console.log("triggered changeCSS", prop);
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

export default function cssPower(colors, cssProperties, findElement, changeCSS, counter, count) {

  return `
     <div class="css-power-description_container">
    <h1>CSS is very powerful</h1>
    <p>A website without css is boring and sad. CSS adds life and creates a pleasant user experience in a website. The diagram on the left demonstrates some basic properties of css.</p>
    </div>
  </div>
    <div class="homepage-css-power">
  <div class="homepage-css-area" draggable="true" ondragover="dragOverFunc(event)" ondrop="mainPageDrag(event)"   ondragstart="changeDragged(this)">
        <h1class="hPTitle">CSS is very powerful</h1>
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
      </div> `
  }
