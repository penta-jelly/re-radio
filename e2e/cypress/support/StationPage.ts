export default (url: string) => ({
  elements: {
    headerText: 'Header',
    chatBoxText: 'Chat Box',
    playlistText: 'Playlist',
    playerText: 'Player',
    addSongText: 'Add Song',
  },

  navigate() {
    cy.visit(url);
  },

  checkStationLayout() {
    cy.contains(this.elements.headerText).should('exist');
    cy.contains(this.elements.chatBoxText).should('exist');
    cy.contains(this.elements.playlistText).should('exist');
    cy.contains(this.elements.playerText).should('exist');
    cy.contains(this.elements.addSongText).should('exist');
  },
});
