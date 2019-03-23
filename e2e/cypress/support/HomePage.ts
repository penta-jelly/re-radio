export default (url: string) => ({
  elements: {
    homePageButton: '#home-page-button',
    buttonText: 'Hello from home page',
  },

  navigate() {
    cy.visit(url);
  },

  checkButton() {
    cy.get(this.elements.homePageButton).should('contain', this.elements.buttonText);
  },
});
