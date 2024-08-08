import "../styles/mainPage.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/navigation.css";
import "../style.css";

import HomePage from "./containers/homepage.js";
import Slide from "./containers/slide.js";
import Animations from "./containers/animations.js";
import Layout from "./containers/layout.js";

const links = document.querySelectorAll(".navLink");
const mainPage = document.querySelector(".mainPage");


(function () {
    links.forEach((link) => {
        link.addEventListener("click", () => handleLinkClick(link));
  });
  HomePage();
})();

function handleLinkClick(link) {
  const i = +link.dataset.index;
      i === 1 ? 
      HomePage() 
      : i === 2
      ? Layout()
      : i === 3
      ? Slide()
      : Animations();

  if (i === 1) {
    document.querySelector(".header").style.display = "flex";
  } else {
    document.querySelector(".header").style.display = "none";
  }
}
