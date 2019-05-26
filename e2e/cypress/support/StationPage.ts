import LoginPage from 'support/authentication/LoginPage';

export default (url: string = '/station') => ({
  elements: {
    headerText: /(.*)/,
    chatBoxText: 'Chat Box',
    playlistText: 'Playlist',
    playerContainer: '#station-player',
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
  },

  navigate(slug: string, withCredential?: boolean) {
    cy.clearLocalStorage();
    if (withCredential) {
      const loginPage = LoginPage();
      loginPage.login({});
    }
    cy.visit(`${url}/${slug}`);
  },

  checkRenderingOfAddSong() {
    cy.get(this.elements.searchSongInput).should('be.visible');
    cy.get(this.elements.searchSongInput).should('have.value', '');

    cy.get(this.elements.searchButton).should('be.visible');
    cy.get(this.elements.closeIconButton).should('not.be.visible');

    cy.get(this.elements.defaultPreviewSongCover).should('be.visible');

    cy.get(this.elements.submitSongButton).should('be.visible');
    cy.get(this.elements.submitSongButton).should('have.attr', 'disabled');
  },

  searchSong(query: string) {
    cy.get(this.elements.searchSongInput).type(query);
    cy.get(this.elements.closeIconButton).should('be.visible');
    cy.get(this.elements.searchButton).should('not.be.visible');
    cy.get(this.elements.searchSongMenu).should('be.visible');
    cy.get(this.elements.searchSongMenu)
      .children()
      .should('have.length', 5);
  },

  checkRenderingOfPreviewSong() {
    cy.get(this.elements.searchSongMenu)
      .children()
      .first()
      .click();

    cy.get(this.elements.previewSongImage).should('be.visible');
    cy.get(this.elements.previewSongTitle).should('be.visible');
    cy.get(this.elements.songCreator).should('be.visible');
    cy.get(this.elements.submitSongButton).should('not.have.attr', 'disabled');
  },

  addSong() {
    cy.wait(1000);
    cy.get(this.elements.submitSongButton).click();
  },
});
