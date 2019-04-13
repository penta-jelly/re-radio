import StationPage from '../support/StationPage';
import StationsPage from '../support/StationsPage';

describe('Show Station Page', () => {
  const stationPage = StationPage('/station');
  describe('By using page URL', () => {
    it('should open station page', () => {
      stationPage.navigate('station-a');
    });

    it('should have layout texts', () => {
      stationPage.checkStationLayout();
    });
  });

  describe('By navigating from other pages', () => {
    const stationsPage = StationsPage('/');

    function navigateFromStationsPage(slug: string) {
      stationsPage.navigate();
      cy.get(stationsPage.elements.stationCardMedia(slug)).click();
    }

    it('should navigable from stations page', () => {
      navigateFromStationsPage('station-a');
      cy.contains('Station A').should('exist');
    });
  });
});
