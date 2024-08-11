import "../../styles/animations.css";
import { changeContainerRadius, ChangePosition, Transform } from "../components/Animation";

const mainPage = document.querySelector(".mainPage");

export default function Animations() {
  mainPage.classList = 'animations-maingPage-style'
  mainPage.innerHTML = `
    <h1 class="animations-container_title">Aminations and CSS Features</h1>
    <div class='animations-container'>

     <div class="anm-transform_container"></div>
     <div class="change-position_container"></div>
     <div class="change-container-radius_container">
      <div class="change-container-radius_start-stop_btn"></div>
     </div>
    
    </div>`;
  changeContainerRadius()
  ChangePosition();
}
