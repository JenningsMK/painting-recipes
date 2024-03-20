/**
 * @summary Functionally for the opening and closing the menu, adding animation to a number of elements.
 * @module side-in-side-button
 */

import { buttonToggle, animatedButton, animationMainNav } from '../../assets/scripts/custom-events.ts';

const slideInSideButton = document.querySelector('#menu-button');
if (slideInSideButton instanceof HTMLButtonElement) {
  slideInSideButton.addEventListener('click', () => {
    slideInSideButton.dispatchEvent(buttonToggle);
    slideInSideButton.dispatchEvent(animationMainNav);
  });

  slideInSideButton.addEventListener('animationend', () => {
    slideInSideButton.dispatchEvent(animatedButton);
  });
}
