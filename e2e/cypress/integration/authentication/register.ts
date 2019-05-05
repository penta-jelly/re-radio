import register from 'support/authentication/RegisterPage';

describe('Register', () => {
  const RegisterPage = register();

  it('should open the register page', () => {
    RegisterPage.navigate();
  });

  it('should fill in all inputs and submit form', () => {
    RegisterPage.register('dungle1811@gmail.com', 'dungle', 'abcdef');
  });
});
