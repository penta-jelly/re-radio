import LoginPage from 'support/authentication/LoginPage';

export default (url: string = '/station') => ({
  elements: {
    headerText: /(.*)/,
    chatBoxText: 'Chat Box',
    playlistText: 'Playlist',
    playerContainer: '#station-player',
    addSongText: 'Add Song',
  },

  navigate(slug: string, withCredential?: boolean) {
    cy.clearLocalStorage();
    if (withCredential) {
      const loginPage = LoginPage();
      loginPage.login({});
    }
    cy.visit(`${url}/${slug}`);
  },
});
