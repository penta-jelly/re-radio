import LoginPage from './authentication/LoginPage';

export default (url = '/') => ({
  elements: {
    searchInput: '#search',
    createStationButton: '#create-station',
    discoverStationsText: /(Discover Stations|Discover Stations)/,
    stationCard: (slug: string) => `#station-${slug}`,
    stationCardTitle: (slug: string) => `#station-${slug} [data-role="card-title"]`,
    stationCardContent: (slug: string) => `#station-${slug} [data-role="card-content"]`,
    stationCardMedia: (slug: string) => `#station-${slug} [data-role="card-media"]`,
    createStation: {
      modal: '#create-station-modal',
      form: '#create-station-form',
      stationNameInput: '#station-name',
      stationSlugInput: '#station-slug',
      stationDescriptionInput: '#station-description',
      stationTagsInput: '#station-tags',
      submitButton: '#create-station-button',
      showMoreButton: '[data-role="showMore"]',
    },
  },

  navigate(withCredential?: boolean) {
    cy.clearLocalStorage();
    if (withCredential) {
      const loginPage = LoginPage();
      loginPage.login({ username: 'pvtri96', password: '123456' });
    }
    cy.visit(url);
  },

  checkStationCard(slug: string, name?: string, tags?: string[]) {
    cy.log(`Check station card for slug "${slug}"`);
    cy.get(this.elements.stationCard(slug))
      .scrollIntoView()
      .should('be.visible');
    cy.get(this.elements.stationCardTitle(slug)).should('be.visible');
    cy.get(this.elements.stationCardContent(slug)).should('exist');
    cy.get(this.elements.stationCardMedia(slug)).should('be.visible');

    if (name) {
      cy.get(this.elements.stationCardTitle(slug)).should('contain', name);
    }
    if (tags) {
      cy.get(this.elements.stationCardContent(slug)).should(element => {
        tags.forEach(tag => {
          expect(element).to.contain(tag);
        });
      });
    }
  },
});
