describe('That the home is correct', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Has the correct page details', () => {
    cy.get('h1').should('have.text', 'Painting Recipes');
    cy.title().should('includes', 'Home | Painting Recipes');
  });

  it('Has the correct amount of children', () => {
    cy.get('[data-testing="40K"] li').should('have.length', 2);
  });

  it('The titles are display and are correct', () => {
    cy.contains('h2', 'Warhammer 40,000').should('exist');
  });

  it('The navigation elements have the correct href attributes', () => {
    // eslint-disable-next-line quotes
    cy.contains('a', "Emperor's Champion")
      .should('have.attr', 'href', '/40K/emperors-champion')
      // eslint-disable-next-line quotes
      .and('have.text', "Emperor's Champion");
    cy.contains('a', 'Voidraven Bomber')
      .should('have.attr', 'href', '/40K/voidraven-bomber')
      .and('have.text', 'Voidraven Bomber');
  });
});
