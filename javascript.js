"use strict";

window.addEventListener("DOMContentLoaded", Init);

const newArray = [];

let counter = 1;

function Init() {
  loop();
}

function loop() {
  console.log(newArray);
  newArray.push(counter);

  counter++;

  if (counter > 10) {
    newArray.splice(0, 1);

    setTimeout(loop, 1000);
  } else {
    setTimeout(loop, 1000);
  }
}
