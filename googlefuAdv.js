"use strict";

// Get size of elements to line up the submit button

let cssVar = document.querySelector(":root");
let inptWidth = document.querySelector("#atw").getBoundingClientRect();
let lblWidth = document.querySelector(".form_child1").getBoundingClientRect();
let newWidth = inptWidth.width + lblWidth.width;
cssVar.style.setProperty("--inptWidth", newWidth + "px");

// Event for when the screen is resized
window.addEventListener("resize", updateBtn);
// Get new values, then update the css variable
function updateBtn() {
    inptWidth = document.querySelector("#atw").getBoundingClientRect();
    lblWidth = document.querySelector(".form_child1").getBoundingClientRect();
    newWidth = inptWidth.width + lblWidth.width;
    cssVar.style.setProperty("--inptWidth", newWidth + "px");
}