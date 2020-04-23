import StationPage from '../support/StationPage';
import StationsPage from '../support/StationsPage';

const stationPage = StationPage();

describe('Show Station Page', () => {
  describe('By using page URL ', () => {
    it('should open station page', () => {
      stationPage.navigate('station-a');
    });

    it('should have layout texts', () => {
      cy.contains('Station A').should('be.visible');
      cy.contains('Playlist').should('be.exist');
      cy.contains('History').should('be.exist');
      cy.contains('Favorite').should('be.exist');
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
  before(() => {
    stationPage.navigate('station-a');
  });

  describe('Player', () => {
    it('should render player container', () => {
      cy.get(stationPage.elements.player.container).should('be.visible');
    });
  });

  describe('Playlist', () => {
    it('should render playlist container', () => {
      cy.get(stationPage.elements.playlist.container).should('be.visible');
    });
  });
});

describe('Add a song', () => {
  it('should be able to add a song to the playlist', () => {
    stationPage.navigate('station-a', true);

    stationPage.clickAddSongFab();

    stationPage.checkRenderingOfAddSong();
    stationPage.searchSong('Hello');

    stationPage.checkRenderingOfPreviewSong();

    stationPage.addSong();

    stationPage.clickAddSongFab();

    cy.get(stationPage.elements.playlist.container, { timeout: 10000 }) // The delay for the server to start the newly added song
      .should('be.visible')
      .contains('Hello')
      .should('be.visible');
  });
});
