import { Result } from './result';

export class Search {
  search(term: string) {
    cy.get('.search-opener').click();

    cy.get('.search-form').as('searchForm');
    cy.get('@searchForm')
      .find('.search-field')
      .type(term);

    cy.get('@searchForm').submit();

    return new Result();
  }
}
