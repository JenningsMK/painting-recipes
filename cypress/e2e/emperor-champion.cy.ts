describe('That the navigation is working as expected', () => {
  beforeEach(() => {
    cy.visit('/40K/emperors-champion');
  });

  it('Has the aria-describedby attribute when the URL is the same as the link', () => {
    const currentLink = cy.get('[aria-describedby="current"]');
    currentLink.should('have.length', '1');
    currentLink.should('have.attr', 'href', '/40K/emperors-champion');
  });

  it('Appends the no-scroll class to the body when clicked', () => {
    cy.contains('#menu-button', 'open menu').trigger('click');
    cy.get('body').should('have.attr', 'class', 'no-scroll');
  });

  it('The label within the button updates when button is clicked', () => {
    cy.get('#menu-button span').should('have.text', 'open menu');
    cy.contains('#menu-button', 'open menu').trigger('click');
    cy.get('#menu-button span').should('have.text', 'close menu');
  });

  it('Has the slide in & out motion when the button is clicked', () => {
    cy.get('nav.navigation').should('not.be.visible');
    cy.get('nav.navigation').should('have.attr', 'aria-hidden');
    cy.get('nav.navigation').should('have.attr', 'inert');
    cy.contains('#menu-button', 'open menu').trigger('click');
    cy.get('nav.navigation').should('be.visible');
    cy.get('nav.navigation').should('not.have.attr', 'aria-hidden');
    cy.get('nav.navigation').should('not.have.attr', 'inert');
  });

  it('Adds the aria-hidden and inert attributes to the main when the overlay is open', () => {
    cy.get('main').should('not.have.attr', 'aria-hidden');
    cy.get('main').should('not.have.attr', 'inert');
    cy.contains('#menu-button', 'open menu').trigger('click');
    cy.get('main').should('have.attr', 'aria-hidden');
    cy.get('main').should('have.attr', 'inert');
  });
});
