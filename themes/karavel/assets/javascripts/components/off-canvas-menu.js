class OffCanvasMenu {
  constructor(selector) {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.querySelectorAll(selector).length > 0) {
        this.selector = selector;
        this.init();
      }
    });
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
  }
}

export { OffCanvasMenu };
