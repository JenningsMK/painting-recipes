/**
 * @file List of commands for checking that the functionality is working as expected when the main navigation is
 * opened and closed on small and large viewports.
 * This includes commands for checking the body and main tags.
 *
 * @module intergration/main-navigation
 */

/**
 * Checks the main tag has the correct attributes when the main navigation closed
 */
const mainTagCheckClosed = () => {
  cy.get('main').should('not.have.attr', 'aria-hidden');
  cy.get('main').should('not.have.attr', 'inert');
};

/**
 * Checks the main tag has the correct attributes when the main navigation open
 */
const mainTagCheckOpen = () => {
  cy.get('main').should('have.attr', 'aria-hidden');
  cy.get('main').should('have.attr', 'inert');
};

/**
 * Checks that links are hidden from the accessibility tree and cannot be interactive with
 */
const mainNavigationClosedAllyCheck = () => {
  cy.get('@nav')
    .find('[data-test="main-nav-section"]')
    .each(($el) => {
      cy.wrap($el).should('have.attr', 'aria-hidden');
    });

  cy.get('@nav')
    .find('a')
    .each(($el) => {
      cy.wrap($el).should('have.attr', 'inert');
    });
};

/**
 * Checks that links are in the accessibility tree and can be interactive with
 */
const mainNavigationOpenedAllyCheck = () => {
  cy.get('@nav').should('be.visible');
  cy.get('@nav')
    .find('[data-test="main-nav-section"]')
    .each(($el) => {
      cy.wrap($el).should('not.have.attr', 'aria-hidden');
    });

  cy.get('@nav')
    .find('a')
    .each(($el) => {
      cy.wrap($el).should('not.have.attr', 'inert');
    });
};

/**
 * Checking that the main-navigation is in the correct state for small viewports
 */
const smallViewportNavigation = () => {
  cy.get('@nav').should('have.attr', 'class').and('include', 'slide-from-side');
  cy.get('@nav').should('not.be.visible');
};

/**
 * Checking that the main-navigation is in the correct state for large viewports
 */
const largeViewportNavigation = () => {
  cy.get('@nav').should('have.attr', 'class').and('include', 'slide-from-top');
  cy.get('@nav').should('be.visible');
};

/**
 * Check that the link for the current page has the aria-describedby attribute
 * @param url - The URL path of the current page
 */
const currentPageCheck = (url: string) => {
  cy.get('[aria-describedby="current"]').as('currentLink');
  cy.get('@currentLink').should('have.length', '1');
  cy.get('@currentLink').should('have.attr', 'href', url);
};

/**
 * Checks the body tag has the no-scroll class
 */
const noScrollCheck = () => {
  cy.get('body').should('have.attr', 'class', 'no-scroll');
};

/**
 * Clicking on the menu button for small viewports
 */
const clickSmallViewportMenuButton = () => {
  cy.get('@button-side').should('be.visible');
  cy.get('@button-side').find('span').should('have.text', 'open menu');
  cy.get('@button-side').trigger('click');
  cy.get('@button-side').find('span').should('have.text', 'close menu');
};

/**
 * Clicking on the menu button for large viewports
 */
const clickLargeViewportMenuButton = () => {
  cy.get('@button-top').should('be.visible');
  cy.get('@button-top').find('span').should('have.text', 'open menu');
  cy.get('@button-top').trigger('click');
  cy.get('@button-top').find('span').should('have.text', 'close menu');
};

export default {
  mainTagCheckClosed,
  mainTagCheckOpen,
  smallViewportNavigation,
  clickSmallViewportMenuButton,
  largeViewportNavigation,
  clickLargeViewportMenuButton,
  currentPageCheck,
  noScrollCheck,
  mainNavigationClosedAllyCheck,
  mainNavigationOpenedAllyCheck,
};
