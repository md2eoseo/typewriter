"use strict";
window.addEventListener("DOMContentLoaded", start);
const typewritten = document.querySelector(".typewritten");
const str = typewritten.textContent;
let i = 0;
typewritten.innerHTML = "";

function start() {
  if (i < str.length) {
    typewritten.innerHTML += str[i++];
    // document.querySelector("#typekey1").pause();
    sound();
  }
}

function sound() {
  if (str[i - 1] == " ") document.querySelector("#typespace").play();
  else if ((i - 1) % 2 == 1) document.querySelector("#typekey1").play();
  else document.querySelector("#typekey2").play();

  setTimeout(start, 200);
}
