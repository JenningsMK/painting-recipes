/**
 * @summary Functionally for the main navigation and overlay
 * @module recipe-navigation
 */

import { CustomEvents, Classes } from '../../assets/scripts/const.ts';
import { animationMainNav } from '../../assets/scripts/custom-events.ts';

/**
 * Update body by removing or adding the `no-scroll` class
 */
const toggleBodyClass = () => {
  document.body.classList.toggle(Classes.noScroll);
};

/** The navigation tag */
const nav = document.querySelector('#main-nav');

/**
 * This function will append a class to the nav element based on the viewport width
 * @param isLargeViewPort - Whether the view port is above a size or not
 */
const toggleNavigationClass = (isLargeViewPort: boolean) => {
  if (nav instanceof HTMLElement) {
    isLargeViewPort ? nav.classList.add('slide-from-top') : nav.classList.remove('slide-from-top');
    isLargeViewPort ? nav.classList.remove('slide-from-side') : nav.classList.add('slide-from-side');
  }
};

/**
 * Toggles the class that open/close the main navigation
 */
const toggleNavigationOpenState = () => {
  nav?.classList.toggle(Classes.toggleNavigation);
};

/**
 * Toggle if the links are tab able and clickable, it will also hide the sections from the accessibility tree
 */
const togglingNavContentInteraction = () => {
  if (nav instanceof HTMLElement) {
    const navLinks = nav.querySelectorAll(':scope .navigation__item');
    const navSection = nav.querySelectorAll(':scope .navigation__section');

    navLinks.forEach((elm) => {
      if (elm instanceof HTMLAnchorElement) {
        elm.toggleAttribute('inert');
      }
    });

    navSection.forEach((section) => {
      if (section.hasAttribute('aria-hidden')) {
        section.removeAttribute('aria-hidden');
      } else {
        section.setAttribute('aria-hidden', 'true');
      }
    });
  }
};

const overlay = document.querySelector('.overlay');

/**
 * Toggle class on the overlay for animation
 */
const animationOverlay = () => {
  overlay?.classList.toggle(Classes.toggleOverLay);

  const mainElement = document.querySelector('main');
  if (mainElement instanceof HTMLElement) {
    mainElement.toggleAttribute('inert');
    if (mainElement.hasAttribute('aria-hidden')) {
      mainElement.removeAttribute('aria-hidden');
    } else {
      mainElement.setAttribute('aria-hidden', 'true');
    }
  }
};

const query = window.matchMedia('(min-width: 67.5rem)');
toggleNavigationClass(query.matches);
togglingNavContentInteraction();

/**
 * Add a resizer observer to add and remove a class to the nav tag to make styling the navigation easier
 */
query.addEventListener('change', (event) => {
  toggleNavigationClass(event.matches);
});

document.addEventListener(CustomEvents.animatedMainNav, () => {
  togglingNavContentInteraction();
  toggleNavigationOpenState();
  animationOverlay();
  toggleBodyClass();
});

if (overlay instanceof HTMLElement) {
  overlay.addEventListener('click', () => {
    overlay.dispatchEvent(animationMainNav);
  });
}

/**
 * When the overlay is open and the escape key is press fire the event to close the main nav
 */
window.addEventListener('keydown', (event: KeyboardEvent) => {
  if (overlay instanceof HTMLElement) {
    if (event.key === 'Escape' && overlay.classList.contains(Classes.toggleOverLay)) {
      overlay.dispatchEvent(animationMainNav);
    }
  }
});
