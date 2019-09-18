export default (url = '/register') => ({
  elements: {
    emailInput: '#email',
    usernameInput: '#username',
    passwordInput: '#password',
    registerButton: '#register-button',
  },

  navigate() {
    cy.visit(url);
  },

  register(email = '', username = '', password = '') {
    cy.get(this.elements.emailInput).type(email);
    cy.get(this.elements.usernameInput).type(username);
    cy.get(this.elements.passwordInput).type(password);

    cy.get(this.elements.registerButton).click();
  },
});
