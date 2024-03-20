/**
 * @summary Sends a custom event once the button in clicked
 * @module slide-in-top-button
 */

import { animationMainNav, buttonToggle } from '../../assets/scripts/custom-events.ts';

const slideInTopButton = document.querySelector('#slide-in-top-button');

if (slideInTopButton instanceof HTMLButtonElement) {
  slideInTopButton.addEventListener('click', () => {
    slideInTopButton.dispatchEvent(buttonToggle);
    slideInTopButton.dispatchEvent(animationMainNav);
  });
}
