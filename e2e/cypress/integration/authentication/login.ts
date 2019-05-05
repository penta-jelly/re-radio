import LoginPage from 'support/authentication/LoginPage';
import RegisterPage from 'support/authentication/RegisterPage';
import StationsPage from 'support/StationsPage';

describe('Login', () => {
  const loginPage = LoginPage();
  const registerPage = RegisterPage();
  const stationsPage = StationsPage('/');

  beforeEach(() => {
    cy.clearLocalStorage();
    loginPage.navigate();
  });

  it('should open the login page', () => {
    cy.get(loginPage.elements.emailInput).should('be.visible');
    cy.get(loginPage.elements.passwordInput).should('be.visible');
    cy.get(loginPage.elements.loginButton).should('be.visible');
    cy.get(loginPage.elements.registerLink).should('be.visible');
  });

  it('should fill in all inputs and submit form using email', () => {
    loginPage.fillInForm({ email: 'thanhvinhlu@reradio.com', password: '123456' });
    loginPage.submit();
    cy.get(stationsPage.elements.createStationButton).should('exist');
  });

  it('should fill in all inputs and submit form using username', () => {
    loginPage.fillInForm({ username: 'thanhvinhlu', password: '123456' });
    loginPage.submit();
    cy.get(stationsPage.elements.createStationButton).should('exist');
  });

  it('should show error message', () => {
    loginPage.fillInForm({ email: 'thanhvinhlu@reradio.com', password: '123456214' });
    loginPage.submit();
    cy.get(loginPage.elements.errorMessage).should('be.visible');
  });

  it('should clear all text', () => {
    loginPage.fillInForm({ email: 'thanhvinhlu@reradio.com', password: '123456214' });
    loginPage.clearForm();
  });

  it('should open the register page', () => {
    cy.get(loginPage.elements.registerLink).click();
    cy.get(registerPage.elements.registerButton).should('exist');
  });
});
