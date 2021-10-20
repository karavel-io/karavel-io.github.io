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
    this.touchStartX = null;
    this.bindEvents();
  }

  bindEvents() {
    document
      .querySelector('.menu-button')
      .addEventListener('click', this.handleMenuButtonClick);

    document.querySelectorAll('.off-canvas-menu-link').forEach((element) => {
      element.addEventListener('click', this.closeMenu);
    });

    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('touchmove', this.handleTouchMove);
    document.addEventListener('touchend', this.handleTouchEnd);
    document.addEventListener('touchcancel', this.handleTouchEnd);
  }

  handleMenuButtonClick = () => {
    this.toggleMenu();
  };

  openMenu() {
    this.toggleMenu(true);
  }

  closeMenu = () => {
    this.toggleMenu(false);
  };

  toggleMenu(forceOpen) {
    document
      .querySelector('.off-canvas-menu')
      .classList.toggle('open', forceOpen);
    document.querySelector('.menu-button').classList.toggle('open', forceOpen);

    this.touchStartX = null;
  }

  handleTouchStart = (event) => {
    this.touchStartX = event.touches[0].clientX;
  };

  handleTouchMove = (event) => {
    if (this.touchStartX === null) {
      return;
    }

    const swipeDifference = event.touches[0].clientX - this.touchStartX;

    if (swipeDifference > 50) {
      this.openMenu();
    }

    if (swipeDifference < -50) {
      this.closeMenu();
    }
  };

  handleTouchEnd = (event) => {
    this.touchStartX = null;
  };
}

export { OffCanvasMenu };
