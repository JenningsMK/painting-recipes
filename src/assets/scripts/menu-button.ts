/**
 * @summary Functionally for the opening and closing the menu, adding animation to a number of elements.
 * @module menu-button
 */

/**
 * Enum representing the state of a navigation.
 * @enum {string}
 */
export enum ButtonState {
  open = 'opened',
  close = 'closed',
}

/**
 * Represents CSS classes used in the application.
 * @enum {string}
 */
export enum Classes {
  noScroll = 'no-scroll',
  toggleOverLay = 'overlay--appear',
  toggleNavigation = 'navigation--open',
  animatedNavButton = 'menu-button--animated',
}

/**
 * Once the animation has finished on the button remove the class, so we can add it again if needed
 */
const animatedButton = function (this: HTMLButtonElement) {
  this.classList.toggle(Classes.animatedNavButton);
};

/**
 * Toggle class to open and close the navigation
 */
const toggleNavigation = () => {
  const menu = document.querySelector('nav');
  menu?.classList.toggle(Classes.toggleNavigation);
  menu?.toggleAttribute('inert');

  if (menu?.hasAttribute('aria-hidden')) {
    menu.removeAttribute('aria-hidden');
  } else {
    menu?.setAttribute('aria-hidden', 'true');
  }
};

/**
 * Toggle class on the overlay for animation
 */
const animationOverlay = () => {
  document.querySelector('.overlay')?.classList.toggle(Classes.toggleOverLay);

  const mainElement = document.querySelector('main');
  mainElement?.toggleAttribute('inert');
  if (mainElement?.hasAttribute('aria-hidden')) {
    mainElement.removeAttribute('aria-hidden');
  } else {
    mainElement?.setAttribute('aria-hidden', 'true');
  }
};

/**
 * Update body by removing or adding the `no-scroll` class
 */
const toggleBodyClass = () => {
  document.body.classList.toggle(Classes.noScroll);
};

/**
 * Change the text of the button to match the state to with the menu will be
 */
const updateAccessibilityText = function (this: HTMLButtonElement) {
  const span = this.querySelector('span');

  if (span instanceof HTMLSpanElement) {
    const state = this.dataset.state;

    span.textContent = state === ButtonState.open ? 'open menu' : 'close menu';
    this.dataset.state = state === ButtonState.open ? ButtonState.close : ButtonState.open;
  }
};

const button = document.querySelector('#menu-button');
if (button instanceof HTMLButtonElement) {
  button.addEventListener(
    'click',
    () => {
      animatedButton.call(button);
      toggleNavigation();
      animationOverlay();
      toggleBodyClass();
      updateAccessibilityText.call(button);
    },
    {
      capture: true,
      passive: true,
    },
  );

  button.addEventListener('animationend', animatedButton, {
    capture: true,
    passive: true,
  });
}
