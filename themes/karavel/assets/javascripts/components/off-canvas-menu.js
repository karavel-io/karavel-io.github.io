class OffCanvasMenu {
  constructor(selector) {
    document.addEventListener("DOMContentLoaded", () => {
      if (document.querySelectorAll(selector).length > 0) {
        this.selector = selector;
        this.init();
      }
    });
  }
  xDown = null;

  init() {
    this.bindEvents();
  }
  toggleMenu() {
    const element = document.getElementById("off-canvas-menu");
    element.classList.toggle("menu-open");
    const menuIcon = document.getElementById("toggle-menu");
    menuIcon.classList.toggle("open");
  }
  openMenu() {
    const element = document.getElementById("off-canvas-menu");
    element.classList.add("menu-open");
    const menuIcon = document.getElementById("toggle-menu");
    menuIcon.classList.add("open");
  }
  closeMenu() {
    const element = document.getElementById("off-canvas-menu");
    element.classList.remove("menu-open");
    const menuIcon = document.getElementById("toggle-menu");
    menuIcon.classList.remove("open");
  }

  bindEvents() {
    const element = document.getElementById("toggle-menu");
    element.addEventListener("click", this.toggleMenu);

    const links = document.getElementsByClassName("off-canvas-menu-link");
    Object.keys(links).forEach((key) => {
      links[key].addEventListener("click", this.closeMenu);
    });

    document.addEventListener("touchstart", this.handleTouchStart);
    document.addEventListener("touchmove", this.leftSwipe);
  }

  handleTouchStart(event) {
    const firstTouch = event.touches[0];
    this.xDown = firstTouch.clientX;
    console.log("touchstart", this.xDown);
  }

  leftSwipe(event) {
    if (!this.xDown) {
      return;
    }
    const xUp = event.touches[0].clientX;
    const swipeDifference = this.xDown - xUp;
    console.log("youche move", swipeDifference);
    if (swipeDifference < 0) {
      const element = document.getElementById("off-canvas-menu");
      element.classList.add("menu-open");
      const menuIcon = document.getElementById("toggle-menu");
      menuIcon.classList.add("open");
    }
    this.xDown = null;
  }
  //   handleTouchMove(evt) {
  //     if ( ! xDown || ! yDown ) {
  //         return;
  //     }

  //     var xUp = evt.touches[0].clientX;
  //     var yUp = evt.touches[0].clientY;

  //     var xDiff = xDown - xUp;
  //     var yDiff = yDown - yUp;

  //     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
  //         if ( xDiff > 0 ) {
  //             /* right swipe */
  //         } else {
  //             /* left swipe */
  //         }
  //     } else {
  //         if ( yDiff > 0 ) {
  //             /* down swipe */
  //         } else {
  //             /* up swipe */
  //         }
  //     }
  //     /* reset values */
  //     xDown = null;
  //     yDown = null;
  // };
}

export { OffCanvasMenu };
