export default (url: string = '/') => ({
  elements: {
    searchInput: '#search',
    createStationButton: '#create-station',
    discoverStationsText: /(Discover Stations|Discover Stations)/,
    stationCard: (slug: string) => `#station-${slug}`,
    stationCardTitle: (slug: string) => `#station-${slug} [data-role="card-title"]`,
    stationCardContent: (slug: string) => `#station-${slug} [data-role="card-content"]`,
    stationCardMedia: (slug: string) => `#station-${slug} [data-role="card-media"]`,
  },

  navigate() {
    cy.visit(url);
  },

  checkStationCard(slug: string) {
    cy.get(this.elements.stationCard(slug)).should('exist');
    cy.get(this.elements.stationCardTitle(slug)).should('exist');
    cy.get(this.elements.stationCardContent(slug)).should('exist');
    cy.get(this.elements.stationCardMedia(slug)).should('exist');
  },
});
