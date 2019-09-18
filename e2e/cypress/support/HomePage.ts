export default (url = '/') => ({
  elements: {},

  navigate() {
    cy.visit(url);
  },
});
