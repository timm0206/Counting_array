"use strict";

window.addEventListener("DOMContentLoaded", Init);

const newArray = [];

let counter = 0;

function Init() {
  loop();
}

function loop() {
  console.log(newArray);
  newArray.unshift(counter);

  counter++;

  if (counter > 9) {
    newArray.pop();

    setTimeout(loop, 1000);
  } else {
    setTimeout(loop, 1000);
  }
}
