const button = document.querySelector('#menu-button');

export enum ButtonState {
  open = 'opened',
  close = 'closed',
}

export enum Classes {
  noScroll = 'no-scroll',
  toggleOverLay = 'overlay--appear',
  toggleNavigation = 'navigation--open',
  animatedNavButton = 'menu-button--animated',
}

if (button instanceof HTMLButtonElement) {
  /** Wrapper for holding all the function for toggling the navigation */
  const menuButton = () => {
    /**
     * Change the text of the button to match the state to with the menu will be
     */
    const updateAccessibilityText = () => {
      const state = button.dataset.state;
      const span = button.querySelector('span');

      if (span instanceof HTMLSpanElement) {
        span.textContent = state === ButtonState.open ? 'open menu' : 'close menu';
        button.dataset.state = state === ButtonState.open ? ButtonState.close : ButtonState.open;
      }
    };
    updateAccessibilityText();

    /**
     * Update body by removing or adding the `no-scroll` class
     */
    const toggleBodyClass = () => {
      document.body.classList.toggle(Classes.noScroll);
    };
    toggleBodyClass();

    /**
     * Toggle class on the overlay for animation
     */
    const animationOverlay = () => {
      const overlay = document.querySelector('.overlay');

      if (overlay instanceof HTMLDivElement) {
        overlay.classList.toggle(Classes.toggleOverLay);
      }
    };
    animationOverlay();

    /**
     * Toggle class to open and close the navigation
     */
    const toggleNavigation = () => {
      const menu = document.querySelector('nav');
      menu?.classList.toggle(Classes.toggleNavigation);
    };
    toggleNavigation();

    button.classList.add(Classes.animatedNavButton);
  };

  /**
   * Once the animation has finished on the button remove the class, so we can add it again if needed
   */
  const animatedButton = () => {
    button.classList.remove(Classes.animatedNavButton);
  };

  button.addEventListener('click', menuButton, {
    capture: true,
    passive: true,
  });
  button.addEventListener('animationend', animatedButton, {
    capture: true,
    passive: true,
  });
}

/**
 * @TODO Need to sort out the menu as you can tab on to it when it's not in view :(
 */
