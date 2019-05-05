import StationsPage from 'support/StationsPage';
import LoginPage from 'support/authentication/LoginPage';
import UserProfilePage from 'support/UserProfilePage';

describe('Show user profile page', () => {
  const userProfilePage = UserProfilePage();
  const loginPage = LoginPage();
  const stationsPage = StationsPage();

  describe('user is not logged in', () => {
    it('should not open user profile', () => {
      userProfilePage.navigate();
      cy.get(userProfilePage.elements.emailContainer).should('not.exist');
      cy.get(stationsPage.elements.createStationButton).should('exist');
    });
  });

  describe('user is logged in', () => {
    beforeEach(() => {
      loginPage.login({});
    });

    describe('owned profile', () => {
      beforeEach(() => {
        userProfilePage.navigate();
      });

      it('should render profile page elements', () => {
        cy.get(stationsPage.elements.createStationButton).should('not.exist');
        userProfilePage.checkGenericInformation();
      });

      it('should render edit profile button', () => {
        cy.get(userProfilePage.elements.editUserProfileButton).should('be.visible');
      });
    });

    describe("other user's profile", () => {
      beforeEach(() => {
        userProfilePage.navigate('pvtri96');
      });

      it('should render profile page elements', () => {
        cy.get(stationsPage.elements.createStationButton).should('not.exist');
        userProfilePage.checkGenericInformation();
      });

      it('should not render edit profile button', () => {
        cy.get(userProfilePage.elements.emailContainer).should('exist');
        cy.get(userProfilePage.elements.editUserProfileButton).should('not.be.visible');
      });
    });
  });
});
