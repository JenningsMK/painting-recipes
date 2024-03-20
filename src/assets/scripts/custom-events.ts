/**
 * @summary I keep all the custom events here to be reused within the app
 * @module customEvent
 */

import { CustomEvents } from './const.ts';

/**
 * Custom event that is used for toggling button class and updating button text.
 *
 * @event buttonToggle
 */
export const buttonToggle = new CustomEvent(CustomEvents.menuButtonToggle, {
  bubbles: true,
});

/**
 * Represents an animated button.
 *
 * @event animatedButton
 */
export const animatedButton = new CustomEvent(CustomEvents.animatedButton, {
  bubbles: true,
});

/**
 * animated the main nav
 *
 * @event animatedMainNav
 */
export const animationMainNav = new CustomEvent(CustomEvents.animatedMainNav, {
  bubbles: true,
});
