export default (url: string = '/login') => ({
  elements: {
    emailInput: '#email',
    passwordInput: '#password',
    loginButton: '#login-button',
    registerLink: '#register-link',
    errorMessage: '#login-error',
    postLoggedInElement: '#create-station',
  },

  navigate() {
    cy.visit(url);
  },

  clearForm() {
    cy.get(this.elements.emailInput).clear();
    cy.get(this.elements.passwordInput).clear();
  },

  login({
    username,
    email = 'admin@reradio.com',
    password = '123456',
  }: {
    username?: string;
    email?: string;
    password?: string;
  }) {
    cy.clearLocalStorage();
    this.navigate();
    this.fillInForm({ username, email, password });
    this.submit();
    cy.get(this.elements.postLoggedInElement).should('exist');
  },

  fillInForm({ username, email, password }: { username?: string; email?: string; password: string }) {
    if (!username && !email) {
      throw new Error('Either user or email is required');
    }

    cy.get(this.elements.emailInput).type(email || username || '');
    cy.get(this.elements.passwordInput).type(password);
  },

  submit() {
    cy.get(this.elements.loginButton).click();
  },
});
