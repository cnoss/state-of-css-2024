/* Observer
---------------------------------------------------------------------------- */

const addObserver = (observedElements) => {
  const options = { rootMargin: "0px", threshold: 0.6 };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const fragment = window.location.hash;
        if (fragment !== `#${id}`) history.pushState("", "", `#${id}`);
      } else {
        entry.target.classList.remove("is-in-view");
      }
    });
  }, options);

  observedElements.forEach(function (element) {
    observer.observe(element);
  });
}

/* Keyboard Events
---------------------------------------------------------------------------- */

const addKeyboardEvents = () => {
  
  const navObjects = document.querySelectorAll(".cover, .wall, .masterpiece");

  const navObjectsArray = Array.from(navObjects);
  let currentNavObject = 0;

  const jump = (direction) => {
    if (direction === "up") {

      currentNavObject = currentNavObject === 0 ? 0 : currentNavObject - 1;
    } else if (direction === "down") {
      currentNavObject = currentNavObject === navObjectsArray.length ? currentNavObject : currentNavObject + 1;
    }

    if(!navObjectsArray[currentNavObject]) return;

    navObjectsArray[currentNavObject].scrollIntoView({ behavior: "smooth", block: "start"});
    history.pushState("", "", `#${navObjectsArray[currentNavObject].id}`);
  };

  // addObserver(navObjects);

  document.onkeydown = function (event) {

    switch (event.key) {
      case 'w':
        jump("up");
        break;

      case 's':
        jump("down");
        break;

      case 'a':
        window.history.back();
        break;

      case 'o':
        document.querySelector('body').classList.toggle('overview');
    }
  };
};




/* Exports
############################################################################ */

export { addKeyboardEvents };