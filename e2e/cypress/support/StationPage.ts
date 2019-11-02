import LoginPage from './authentication/LoginPage';

export default (url = '/station') => ({
  elements: {
    player: {
      container: '#station-player',
    },
    playlist: {
      container: '#playlist-container',
    },
    addSong: {
      searchSongInput: '#search-song-input',
      closeIconButton: '#close-button',
      searchButton: '#search-button',
      searchSongMenu: '#search-song-menu',
      searchSongItem: '#search-song-item',
      defaultPreviewSongCover: '#default-preview-cover',
      previewSongImage: '#preview-image',
      previewSongTitle: '#preview-song-title',
      previewSongChannel: '#preview-song-channel',
      songCreator: '#song-creator',
      submitSongButton: '#submit-song-button',
      addSongFab: '#add-song-fab',
    },
  },

  navigate(slug: string, withCredential?: boolean) {
    cy.clearLocalStorage();
    if (withCredential) {
      const loginPage = LoginPage();
      loginPage.login({});
    }
    cy.visit(`${url}/${slug}`);
  },

  clickAddSongFab() {
    cy.get(this.elements.addSong.addSongFab)
      .should('be.visible')
      .click()
      .wait(300);
  },

  checkRenderingOfAddSong() {
    cy.get(this.elements.addSong.searchSongInput).should('be.visible');
    cy.get(this.elements.addSong.searchSongInput).should('have.value', '');

    cy.get(this.elements.addSong.searchButton).should('be.visible');
    cy.get(this.elements.addSong.closeIconButton).should('not.be.visible');

    cy.get(this.elements.addSong.defaultPreviewSongCover).should('be.visible');

    cy.get(this.elements.addSong.submitSongButton).should('be.exist');
    cy.get(this.elements.addSong.submitSongButton).should('have.attr', 'disabled');
  },

  searchSong(query: string) {
    cy.get(this.elements.addSong.searchSongInput).type(query);
    cy.get(this.elements.addSong.closeIconButton).should('be.visible');
    cy.get(this.elements.addSong.searchButton).should('not.be.visible');
    cy.get(this.elements.addSong.searchSongMenu).should('be.visible');
    cy.get(this.elements.addSong.searchSongMenu)
      .children()
      .should('have.length', 5);
  },

  checkRenderingOfPreviewSong() {
    cy.get(this.elements.addSong.searchSongMenu)
      .children()
      .first()
      .click();

    cy.get(this.elements.addSong.previewSongImage).should('be.visible');
    cy.get(this.elements.addSong.previewSongTitle).should('be.visible');
    cy.get(this.elements.addSong.songCreator).should('be.visible');
    cy.get(this.elements.addSong.submitSongButton).should('not.have.attr', 'disabled');
  },

  addSong() {
    cy.wait(1000);
    cy.get(this.elements.addSong.submitSongButton).click();
  },
});
