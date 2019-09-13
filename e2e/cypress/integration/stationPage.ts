import StationPage from 'support/StationPage';
import StationsPage from 'support/StationsPage';

describe('Show Station Page', () => {
  const stationPage = StationPage();
  describe('By using page URL', () => {
    it('should open station page', () => {
      stationPage.navigate('station-a');
    });

    it('should have layout texts', () => {
      cy.get(stationPage.elements.playerContainer).should('exist');
      cy.contains(stationPage.elements.headerText).should('exist');
      cy.contains(stationPage.elements.chatBoxText).should('exist');
    });
  });

  describe('By navigating from other pages', () => {
    const stationsPage = StationsPage();

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

describe('Station Page components', () => {
  const stationPage = StationPage();
  beforeEach(() => {
    stationPage.navigate('station-a');
  });
  describe('Player', () => {
    it('should render player container', () => {
      cy.get(stationPage.elements.playerContainer)
        .should('be.visible')
        .find('h4, h6')
        .should('be.visible');
    });
  });
});

describe('Add a song', () => {
  const stationPage = StationPage();

  it('should be able to add a song to the playlist', () => {
    stationPage.navigate('station-a', true);

    stationPage.checkRenderingOfAddSong();
    stationPage.searchSong('hello');

    stationPage.checkRenderingOfPreviewSong();

    stationPage.addSong();
    stationPage.checkRenderingOfAddSong();
  });
});
