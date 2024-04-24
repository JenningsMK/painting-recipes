const tests = (paints: Array<{ name: string; id?: string }>) => {
  it('Will check the section title is correct', () => {
    cy.get('@paint-swatch').find('h2').should('have.text', 'Paints Used');
  });

  it('Will check that the swatch is correct', () => {
    cy.get('@paint-swatch').find('[data-test="swatch-card"]').as('swatchCard');
    cy.get('@swatchCard').should('have.length', paints.length);

    paints.forEach((paint) => {
      if (paint.id) {
        cy.get('@paint-swatch').should('include.text', paint.id).and('include.text', paint.name);
      } else {
        cy.get('@paint-swatch').should('include.text', paint.name);
      }

      // rgba(246, 162, 1, 1)
    });
  });
};

export default {
  tests,
};
