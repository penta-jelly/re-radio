import { Search } from './search';

export class Home {
  navigate() {
    cy.visit('/');
    return this;
  }

  openSearch() {
    return new Search();
  }
}
