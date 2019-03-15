export class Result {
  assertUrl(term: string) {
    const query = `?s=${term}`;
    cy.url().should('include', query);

    cy.get('span.number-of-articles')
      .should('exist');
  }
}
