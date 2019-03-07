export class Result {
  assertUrl(term: string) {
    const query = `?s=${term}`;
    cy.url().should('include', query);

    cy.get('nav.breadcrumbs')
      .find('ul')
      .children()
      .should('have.length', 7);

    cy.get('span.number-of-articles')
      .contains('180 Articles')
      .should('exist');
  }
}
