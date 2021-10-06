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

    document.addEventListener("touchstart", (event) =>
      this.handleTouchStart(event)
    );
    document.addEventListener("touchmove", (event) => this.handleSwipe(event));
  }

  handleTouchStart(event) {
    const firstTouch = event.touches[0];
    this.xDown = firstTouch.clientX;
  }

  handleSwipe(event) {
    if (!this.xDown) {
      return;
    }
    const xUp = event.touches[0].clientX;
    const swipeDifference = this.xDown - xUp;

    if (swipeDifference < 0) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
    this.xDown = null;
  }
}

export { OffCanvasMenu };
