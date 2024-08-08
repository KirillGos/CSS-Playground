import '../../styles/slideItems.css';

function Slide() {
    return `
      <div class="slide_container" drabbable='true' ondrag="slideItems(event)">
        <div class="slide-wrapper">
          <div class='slide-item'>
            <img src="./assets/1.jpg" alt=""/>
          </div>
          <div class='slide-item'>
            <img src="./assets/2.jpg" alt=""/>
          </div>
          <div class='slide-item'>
            <img src="./assets/3.jpg" alt=""/>
          </div>
          <div class='slide-item'>
            <img src="./assets/4.jpg" alt=""/>
          </div>
          <div class='slide-item'>
            <img src="./assets/5.jpg"  alt=""/>
          </div>
          <div class='slide-item'>
            <img src="./assets/6.jpg"  alt=""/>
          </div>
          <div class='slide-item'>
            <img src="./assets/7.jpg"  alt=""/>
          </div>
      </div>  
         
        </div>
      </div>
  
    `;
  }
  function slideItems(event) {
      console.log(event)
      event.target.scroll( )
  }