"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  const typewritten = document.querySelector(".typewritten");
  typewriter(typewritten, done);
}

function done() {
  console.log("Done!");
}

function typewriter(typewritten, callback) {
  const str = typewritten.textContent.trim();
  let i = 0;
  typewritten.innerHTML = "";

  loop();

  function loop() {
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

    typewritten.innerHTML += str[i++];

    if (i < str.length) setTimeout(loop, 200);
    else {
      document.querySelector("#typelast").play();
      callback();
    }
  }
}
