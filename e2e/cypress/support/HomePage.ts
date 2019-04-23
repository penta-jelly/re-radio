export default (url: string = '/') => ({
  elements: {},

  navigate() {
    cy.visit(url);
  },
});
