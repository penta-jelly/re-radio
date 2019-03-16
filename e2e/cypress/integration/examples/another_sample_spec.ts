describe('Visit home', () => {
  before(() => {
    cy.log(Cypress.config('baseUrl') as string);
  });

  it('should render a button', () => {
    cy.visit('/');
    cy.get('button').should('be.visible');
  });
});
