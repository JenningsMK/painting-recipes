describe('That the navigation is rendering the correct information', () => {
  describe('On the home/splash screen the navigation is correct', () => {
    it('That the 40K sections is correct', () => {
      cy.visit('/');

      cy.get('[data-testing="40K"] li').should('have.length', 2);
      // eslint-disable-next-line
      cy.contains("Emperor's Champion").should('have.attr', 'href', '/40K/emperors-champion');
      cy.contains('Voidraven Bomber').should('have.attr', 'href', '/40K/voidraven-bomber');
    });
  });
});
