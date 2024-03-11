/**
 * @module recipe-navigation
 */

/**
 * This function will append a class to the nav element based on the viewport width
 * @param isLargeViewPort - Whether the view port is above a size or not
 */
const toggleNavigationClass = (isLargeViewPort: boolean) => {
  const nav = document.querySelector('nav');
  if (nav instanceof HTMLElement) {
    isLargeViewPort ? nav.classList.add('slide-from-top') : nav.classList.remove('slide-from-top');
    isLargeViewPort ? nav.classList.remove('slide-from-side') : nav.classList.add('slide-from-side');
  }
};

const query = window.matchMedia('(min-width: 67.5rem)');
/**
 * Add a resizer observer to add and remove a class to the nav tag to make styling the navigation easier
 */
query.addEventListener('change', (event) => {
  toggleNavigationClass(event.matches);
});

toggleNavigationClass(query.matches);

const overlay = document.querySelector('.overlay');
if (overlay instanceof HTMLElement) {
  overlay.addEventListener('click', () => {
    const button = document.querySelector('#menu-button');
    if (button instanceof HTMLButtonElement) {
      /** see {@link module:side-in-side-button} for what the button does */
      button.dispatchEvent(new MouseEvent('click'));
    }
  });
}
