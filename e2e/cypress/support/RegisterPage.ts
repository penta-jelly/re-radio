export default (url: string) => ({
  elements: {
    emailInput: '#email',
    usernameInput: '#username',
    passwordInput: '#password',
    registerButton: '#register-button',
  },

  navigate() {
    cy.visit(url);
  },

  register(email: string = '', username: string = '', password: string = '') {
    cy.get(this.elements.emailInput).type(email);
    cy.get(this.elements.usernameInput).type(username);
    cy.get(this.elements.passwordInput).type(password);

    cy.get(this.elements.registerButton).click();
  },
});
