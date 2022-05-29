"use strict";

let logo_imgsArr = ["gFuStance1.png", "gFuStance2.png", "gFuStance3.png"];

document.getElementById("logo").src = logo_imgsArr[Math.floor(Math.random() * 3)];
