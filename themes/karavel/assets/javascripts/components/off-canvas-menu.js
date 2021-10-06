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
    element.classList.add("menu-open");
  }

  bindEvents() {
    const element = document.getElementById("menu-button");
    element.addEventListener("click", this.openMenu);
  }
}

export { OffCanvasMenu };
