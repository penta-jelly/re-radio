export default (url: string = '/station') => ({
  elements: {
    headerText: /(.*)/,
    chatBoxText: 'Chat Box',
    playlistText: 'Playlist',
    playerText: 'Player',
    addSongText: 'Add Song',
  },

  navigate(slug: string) {
    cy.visit(`${url}/${slug}`);
  },

  checkStationLayout() {
    cy.contains(this.elements.headerText).should('exist');
    cy.contains(this.elements.chatBoxText).should('exist');
    cy.contains(this.elements.playlistText).should('exist');
    cy.contains(this.elements.playerText).should('exist');
    cy.contains(this.elements.addSongText).should('exist');
  },
});
