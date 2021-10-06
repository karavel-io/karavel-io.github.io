class OffCanvasMenu {
  constructor(selector) {
    document.addEventListener("DOMContentLoaded", () => {
      if (document.querySelectorAll(selector).length > 0) {
        this.selector = selector;
        this.init();
      }
    });
  }

  init() {
    this.bindEvents();
  }
  toggleMenu() {
    const element = document.getElementById("off-canvas-menu");
    element.classList.toggle("menu-open");
    const menuIcon = document.getElementById("toggle-menu");
    menuIcon.classList.toggle("open");
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
  }
}

export { OffCanvasMenu };
