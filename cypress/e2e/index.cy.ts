describe('That the home/splash has the correct details', () => {
  it('Has the correct page details', () => {
    cy.visit('/');

    cy.get('h1').should('have.text', 'Painting Recipes');
    cy.title().should('includes', 'Home | Painting Recipes');
  });
});
