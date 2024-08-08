import '../../styles/slideItems.css';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';
import image7 from '../../assets/7.jpg';
const mainPage = document.querySelector(".mainPage");
export default function Slide() {
  
    mainPage.innerHTML =  `
      <div class="slide_container">
        <div class="slide-wrapper">
          <div class='slide-item'>
            <img src="${image1}" alt=""/>
          </div>
          <div class='slide-item'>
            <img src="${image2}" alt=""/>
          </div>
          <div class='slide-item'>
            <img src="${image3}" alt=""/>
          </div>
          <div class='slide-item'>
            <img src="${image4}" alt=""/>
          </div>
          <div class='slide-item'>
            <img src="${image5}"  alt=""/>
          </div>
          <div class='slide-item'>
            <img src="${image6}"  alt=""/>
          </div>
          <div class='slide-item'>
            <img src="${image7}"  alt=""/>
          </div>
      </div>  
         
        </div>
      </div>
  
    `;
  }