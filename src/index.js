import cssPower from './cssPower.js';
import {
    colors,
    cssProperties,
    findElement,
    changeCSS,
    counter,
    count
} from './cssPower.js';
const mainPage = document.querySelector(".mainPage");

mainPage.insertAdjacentHTML('beforeend',cssPower(colors, cssProperties, findElement, changeCSS, counter, count));