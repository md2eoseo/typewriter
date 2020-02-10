"use strict";
window.addEventListener("DOMContentLoaded", start);
const typewritten = document.querySelector(".typewritten");
const str = typewritten.textContent.trim();
const len = str.length;
let i = 0;
typewritten.innerHTML = "";
console.log(str + "'s length is " + len);

function start() {
  if (i < len) {
    sound();
    typewritten.innerHTML += str[i++];
    // document.querySelector("#typekey1").pause();
  } else {
    document.querySelector("#typelast").play();
    console.log("last");
  }
}

function sound() {
  if ((i - 1) % 2 == 0) {
    document.querySelector("#typekey1").pause();
    console.log("1 pause");
  } else {
    document.querySelector("#typekey2").pause();
    console.log("2 pause");
  }

  if (str[i] == " ") {
    document.querySelector("#typespace").play();
    console.log("space");
  } else if (i % 2 == 1) {
    document.querySelector("#typekey1").play();
    console.log("1");
  } else {
    document.querySelector("#typekey2").play();
    console.log("2");
  }

  setTimeout(start, 200);
}
