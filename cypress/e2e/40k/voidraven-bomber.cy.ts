import mainNavigation from '../../intergration/main-navigation';

describe('Testing the content of the page', () => {
  beforeEach(() => {
    cy.visit('/40K/voidraven-bomber');
    cy.get('[data-test="slide-in-side-button"').as('button-side');
    cy.get('[data-test="slide-in-top-button"').as('button-top');
    cy.get('[data-test="main-nav"]').as('nav');
  });

  it('Has the correct page details', () => {
    cy.title().should('includes', 'Voidraven Bomber | Painting Recipes');
    cy.getDescription().should(
      'have.attr',
      'content',
      'Painting a Games workshop, dark eldar void bomber in the paint schemes of cult of strife',
    );
    cy.get('h1').should('have.text', 'Voidraven Bomber');
  });

  it('That the page is set up correctly', () => {
    mainNavigation.currentPageCheck('/40K/voidraven-bomber');
    mainNavigation.mainTagCheckClosed();
    mainNavigation.mainNavigationClosedAllyCheck();
  });

  describe('small viewport checks', () => {
    it('Has the correct class to allow it to slide in from the side', () => {
      mainNavigation.smallViewportNavigation();
    });

    it('When the main navigation is toggled', () => {
      mainNavigation.clickSmallViewportMenuButton();
      mainNavigation.noScrollCheck();
      mainNavigation.mainTagCheckOpen();
      mainNavigation.mainNavigationOpenedAllyCheck();
    });
  });

  describe('large viewport checks', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });

    it('Has the correct class to allow it to side in from the top of the page', () => {
      mainNavigation.largeViewportNavigation();
    });

    it('When the main navigation is toggled', () => {
      mainNavigation.clickLargeViewportMenuButton();
      mainNavigation.noScrollCheck();
      mainNavigation.mainTagCheckOpen();
      mainNavigation.mainNavigationOpenedAllyCheck();
    });
  });
});
