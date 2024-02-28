describe('What the page should look like', () => {
  beforeEach(() => {
    cy.visit('/40K/voidraven-bomber');
  });

  it('Has the correct page details', () => {
    cy.title().should('includes', 'Voidraven Bomber | Painting Recipes');
    cy.metatag('description').should(
      'have.attr',
      'content',
      'Painting a Games workshop, dark eldar void bomber in the paint schemes of cult of strife',
    );
    cy.get('h1').should('have.text', 'Voidraven Bomber');
  });
});
