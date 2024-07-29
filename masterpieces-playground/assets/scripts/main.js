import { addKeyboardEvents } from "./modules/keyboard-navigation.js";

/* Config
############################################################################ */

/* Functions
############################################################################ */

const hijackLinks = () => { 

  const backLinks = document.querySelectorAll('[data-js-back]');
  backLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.back();
    });
  });
};

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function () {
  addKeyboardEvents();
  hijackLinks();
});