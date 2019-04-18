import login from '../../support/authentication/LoginPage';

describe('Login', () => {
  const LoginPage = login('/login');

  it('should open the login page', () => {
    LoginPage.navigate();
  });

  it('should fill in all inputs and submit form', () => {
    LoginPage.loginWithEmail('thanhvinhlu@reradio.com', '123456');
  });

  it('should show error message', () => {
    LoginPage.loginWithWrongPassword('thanhvinhlu@reradio.com', '123456214');
  });

  it('should fill in all inputs and submit form', () => {
    LoginPage.loginWithUsername('thanhvinhlu', '123456');
  });

  it('should open the station page', () => {
    LoginPage.navigateStation();
  });

  it('should open the register page', () => {
    LoginPage.redirectToRegisterPage();
  });

  it('clear all test', () => {
    LoginPage.clearText();
  });
});
