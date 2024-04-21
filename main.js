
'use strict';


/**
 * PRELOAD
 * 
 * loading will be end after cocument is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);
