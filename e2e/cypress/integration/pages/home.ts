import { Search } from './search';

export class Home {
  navigate() {
    cy.visit('https://css-tricks.com');
    return this;
  }

  openSearch() {
    return new Search();
  }
}
