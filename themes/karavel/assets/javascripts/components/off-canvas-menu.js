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
  openMenu() {
    const element = document.getElementById("off-canvas-menu");
    element.classList.toggle("menu-open");
    const menuIcon = document.getElementById("toggle-menu");
    menuIcon.classList.toggle("open");
  }

  bindEvents() {
    const element = document.getElementById("toggle-menu");
    element.addEventListener("click", this.openMenu);
  }
}

export { OffCanvasMenu };
