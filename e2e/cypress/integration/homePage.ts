import homePage from '../support/HomePage';

describe('Show Home Page', () => {
  const HomePage = homePage();

  it('should open the home page', () => {
    HomePage.navigate();
  });
});
