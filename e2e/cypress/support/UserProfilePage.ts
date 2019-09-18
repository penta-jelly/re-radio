export default (url = '/profile') => ({
  elements: {
    emailContainer: '#email-container',
    usernameContainer: '#username-container',
    repContainer: '#rep-container',
    googleContainer: '#google-container',
    fbContainer: '#fb-container',
    cityContainer: '#city-container',
    countryContainer: '#country-container',
    bioContainer: '#bio-container',
    profileImage: '#profile-image',
    editUserProfileButton: '#edit-user-profile',
  },

  navigate(username = '') {
    cy.visit(`${url}/${username}`);
  },

  checkGenericInformation() {
    cy.get(this.elements.emailContainer).should('exist');
    cy.get(this.elements.usernameContainer).should('exist');
    cy.get(this.elements.repContainer).should('exist');
    cy.get(this.elements.googleContainer).should('exist');
    cy.get(this.elements.fbContainer).should('exist');
    cy.get(this.elements.cityContainer).should('exist');
    cy.get(this.elements.countryContainer).should('exist');
    cy.get(this.elements.bioContainer).should('exist');
    cy.get(this.elements.profileImage).should('exist');
  },
});
