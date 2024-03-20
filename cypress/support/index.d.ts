/// <reference types="cypress" />

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Gets the description from the head of the document
       * @example cy.getDescription() == <meta name="description" />
       */
      getDescription(): Chainable<JQuery<HTMLElement>>;
    }
  }
}
