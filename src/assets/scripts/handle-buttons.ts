/**
 * @summary Functionally for updating the state of buttons and toggling animation classes.
 * @module handle-buttons
 */

import { CustomEvents, Classes } from './const.ts';

/**
 * Enum representing the state of a navigation.
 * @enum {string}
 */
export enum ButtonState {
  open = 'opened',
  close = 'closed',
}

/**
 * Once the animation has finished on the button remove the class, so we can add it again if needed
 * @param button - The button to toggle the class animation class on
 */
const animatedButton = function (button: HTMLButtonElement) {
  button.classList.toggle(Classes.animatedNavButton);
};

/**
 * Change the text of the button to match the state to with the menu will be
 * @param button - The button to update the state and text for
 */
const updateAccessibilityText = function (button: HTMLButtonElement) {
  const span = button.querySelector('span');

  if (span instanceof HTMLSpanElement) {
    const state = button.dataset.state;

    span.textContent = state === ButtonState.open ? 'open menu' : 'close menu';
    button.dataset.state = state === ButtonState.open ? ButtonState.close : ButtonState.open;
  }
};

document.addEventListener(CustomEvents.menuButtonToggle, (event) => {
  if (event.target instanceof HTMLButtonElement) {
    animatedButton(event.target);
    updateAccessibilityText(event.target);
  }
});

document.addEventListener(CustomEvents.animatedButton, (event) => {
  if (event.target instanceof HTMLButtonElement) {
    animatedButton(event.target);
  }
});
