import "../../styles/mainPage.css";
import cssPower from "../components/cssPower.js";
import TickTackToe from "../components/tickTack.js";
import ToDoApp from "../components/toDoApp.js";

const mainPage = document.querySelector(".mainPage");

const htmlTemplate = `
  <div class="homepage-css-power_description home-page-description">
  <div class="css-power-description_container">
    <h1>CSS is very powerful</h1>
    <p>A website without css is boring and sad. CSS adds life and creates a pleasant user experience in a website. The diagram on the left demonstrates some basic properties of css.</p>
    </div>
    </div>
      <div class="homepage-css-power"></div>
       <div class="homepage-to-do-app_description home-page-description">
        <div class="homepage-to-do-app_descript-container">
          <h1>To Do App</h1>
           <p>I couldn't resist adding a classic to-do-app. To do app is one of the first apps I've ever build. This to-do-app has all the basic functuanality. Also this app uses localStorage to store your todo's on your web-browser</p>
        </div>
        </div>      
        <div class="homepage-to-do"></div>

          <div class="home-page-description" >
             <div class="tick-tack-toe_description">
                 <h1>Tick Tack Toe</h1>
                 <p> Simple tick tack toe game. Play with someone or play against a robot.</p>
              </div>  
          </div>
          <div class="tick-tack-toe_container"></div>
          `;

export default function HomePage() {
  mainPage.classList = "";
  mainPage.classList.add("homepage-style");

  mainPage.innerHTML = htmlTemplate; 
  ToDoApp();
  TickTackToe();
  cssPower();
}
