import "../../styles/mainPage.css";
import cssPower from "../components/cssPower.js";
import TickTackToe from "../components/tickTack.js";
import ToDoApp from "../components/toDoApp.js";

const mainPage = document.querySelector(".mainPage");
const htmlTemplate = `
 <div class="left-slider">
  <div class="homepage-css-power_description home-page-description">
    <div class="css-power-description_container">
      <h1>CSS is very powerful</h1>
      <p>
        A website without css is boring and sad. CSS adds life and creates a
        pleasant user experience in a website. The diagram on the left
        demonstrates some basic properties of css.
      </p>
    </div>
  </div>
  <div class="homepage-to-do-app_description home-page-description">
    <div class="homepage-to-do-app_descript-container">
      <h1>To Do App</h1>
      <p>
        This to-do-app has all the basic
        functuanality. Also this app uses localStorage to store your todo's on
        your web-browser
      </p>
    </div>
  </div>
  <div class="home-page-description homepage-tick-tack-description">
    <div class="tick-tack-toe_description">
      <h1>Tick Tack Toe</h1>
      <p>
        Simple tick tack toe game. Play with someone or play against a robot.
      </p>
    </div>
  </div>
</div>
<div class="right-slider">
<div class="tick-tack-game right-slider-item"></div>
<div class="homepage-to-do right-slider-item"></div>
<div class="homepage-css-power right-slider-item"></div>
</div>

<div class="sliders-buttons">
<button class="up-button">⬆</button>
<button class="down-button">⬇</button>
</div>
        `;

export default function HomePage() {
  mainPage.classList = "";
  mainPage.classList.add("homepage-style");

  mainPage.innerHTML = htmlTemplate;
  ToDoApp();
  TickTackToe();
  cssPower();
  slider();
}
function slider() {
  const mainPage = document.querySelector(".homepage-style");
  const sliderRight = document.querySelector(".right-slider");
  const sliderLeft = document.querySelector(".left-slider");
  const upButton = document.querySelector(".up-button");
  const downButton = document.querySelector(".down-button");
  let activeSlideIndex = 0;
  const slidesLength = sliderRight.querySelectorAll(".right-slider-item").length;

  sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

  upButton.addEventListener("click", () => {
    changeSlide("up");  
  });
  downButton.addEventListener("click", () => {
    changeSlide("down");
  });

  const changeSlide = (direction) => {
    const sliderHeight = mainPage.clientHeight;
    if (direction === "up") {
      activeSlideIndex++;
      if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0;
      }
    } else if (direction === "down") {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;
      }
    }

    sliderRight.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;
    sliderLeft.style.transform = `translateY(${
      activeSlideIndex * sliderHeight
    }px)`;
  };
}
