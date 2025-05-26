import "./output.css";
import {homePage} from "./home.js";
import {aboutPage} from "./about.js"
import {menuPage} from "./menu.js"

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", () => {
    homePage();
})

menuBtn.addEventListener("click", () => {
    menuPage();
})

aboutBtn.addEventListener("click", () => {
    aboutPage();
})