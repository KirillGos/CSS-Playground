export function Transform() {
  const anmTransfrom = document.querySelector(".anm-transform");
  anmTransfrom.addEventListener("click", transform);
}
const htmlTemplate = `
<div class="anm-transform" data-active="true">
         <div class="line-1 line transform_line-1"></div>
         <div class="line-2 line transform_line-2"></div>
         <div class="line-3 line hidden"></div>
     </div> 
  <div class="below-menu">
  <div class="start">
  </div>
       <div class="stop hidden">
         <div class="stop-1"></div>
         <div class="stop-2"></div>
       </div>
       <div id="change-container-radius">
           <div class="change-container-line"></div>
           <div class="change-container-button"></div>
       </div>
  </div>
    `;
function transform() {
  const anmTransform = document.querySelector(".anm-transform");
  const container = document.querySelector('.change-container-radius_container');
  const line1 = document.querySelector(".line-1");
  const line2 = document.querySelector(".line-2");
  const line3 = document.querySelector(".line-3");

  if (anmTransform.dataset.active && anmTransform.dataset.active === "true") {
    anmTransform.dataset.active = "false";
    line3.classList.remove("hidden");
    line1.classList.remove("transform_line-1");
    line2.classList.remove("transform_line-2");
    // container.classList.add('hidden');
  } else {
    anmTransform.dataset.active = "true";
    // container.classList.add('hidden');
    line3.classList.add("hidden");

    line1.classList.add("transform_line-1");
    line2.classList.add("transform_line-2");
  }
}
function counter() {
  let count = 0;
  return function (stopIndex) {
    if (count === stopIndex) {
      count = 0;
    }
    return (count += 1);
  };
}
const changePositionCounter = counter();
export function ChangePosition() {
  const changeContainer = document.querySelector(".change-position_container");
  changeContainer.innerHTML = `
        <div id="change-position">
            Click
        </div>
    `;
  const changePositionItem = document.querySelector("#change-position");
  changePositionItem.addEventListener("click", transformChangePosition);
}

function transformChangePosition() {
  const changePositionItem = document.querySelector("#change-position");
  const i = changePositionCounter(6);
  changePositionItem.classList = `changePosition${i}`;
}
function generateRandomColors() {
  return Math.floor(Math.random() * 255);
}
export function changeContainerRadius() {
  const changeContainer = document.querySelector(
    ".change-container-radius_container"
  );
  try {
    const html = new Promise((resolve) => {
      resolve(htmlTemplate);
    }).then((value) => {
      changeContainer.innerHTML = value;
    }).then((value) => {
      // answer.then(() => Transform())
      startRadiusAnimation();
    }).then(() => {
      Transform();
    })
  } catch(error) {
  } 

}

const count = counter();

function startRadiusAnimation() {
  const start = document.querySelector(".start");
  const stop = document.querySelector(".stop");
  const btn = document.querySelector(".change-container-button");
  start.addEventListener("click", () => {
    stop.classList.remove("hidden");
    start.classList.add("hidden");
    const container = document.querySelector(
      ".change-container-radius_container"
    );
    const myInterval = setInterval(() => {
      container.style.backgroundColor = `rgb(${generateRandomColors()}, ${generateRandomColors()}, ${generateRandomColors()})`;
      container.style.borderRadius = count(280) + "px";
      
      btn.style.transform = `translate(${count(280)}px)`;
    }, 1000);

    stop.addEventListener("click", () => {
      stop.classList.add("hidden");
      start.classList.remove("hidden");
      clearInterval(myInterval);
    });
  });
}
