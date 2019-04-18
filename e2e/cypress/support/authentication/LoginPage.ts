export default (url: string) => ({
  elements: {
    emailInput: '#email',
    passwordInput: '#password',
    loginButton: '#login-button',
    registerLink: '#register-link',
    errorMessage: '#login-error',
  },

  navigate() {
    cy.visit(url);
  },

  navigateStation() {
    cy.visit('/');
  },

  loginWithEmail(email: string = '', password: string = '') {
    cy.get(this.elements.emailInput).type(email);
    cy.get(this.elements.passwordInput).type(password);

    cy.get(this.elements.loginButton).click();
  },

  loginWithWrongPassword(email: string = '', password: string = '') {
    cy.get(this.elements.emailInput).type(email);
    cy.get(this.elements.passwordInput).type(password);

    cy.get(this.elements.loginButton).click();

    cy.get(this.elements.errorMessage).should('have.length.greaterThan', '0');
  },

  clearText() {
    cy.get(this.elements.emailInput).clear();
    cy.get(this.elements.passwordInput).clear();
  },

  loginWithUsername(username: string = '', password: string = '') {
    cy.get(this.elements.emailInput).type(username);
    cy.get(this.elements.passwordInput).type(password);

    cy.get(this.elements.loginButton).click();
  },

  redirectToRegisterPage() {
    cy.get(this.elements.registerLink).click();

    cy.visit('/register');
  },
});
