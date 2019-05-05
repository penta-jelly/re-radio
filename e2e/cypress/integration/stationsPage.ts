import StationsPage from 'support/StationsPage';

describe('Show Stations Page', () => {
  const stationsPage = StationsPage();

  it('should be able to visit', () => {
    stationsPage.navigate();
  });

  it('should render basic elements', () => {
    cy.get(stationsPage.elements.searchInput).should('be.visible');
    cy.get(stationsPage.elements.createStationButton).should('be.visible');
    cy.contains(stationsPage.elements.discoverStationsText).should('be.exist');
  });

  it('should render station cards', () => {
    stationsPage.checkStationCard('normie-station');
    stationsPage.checkStationCard('station-a');
    stationsPage.checkStationCard('station-b');
    stationsPage.checkStationCard('station-c');
    stationsPage.checkStationCard('station-d');
    stationsPage.checkStationCard('station-e');
    stationsPage.checkStationCard('station-f');
    stationsPage.checkStationCard('station-g');
    stationsPage.checkStationCard('station-h');
    stationsPage.checkStationCard('station-i');
  });
});
