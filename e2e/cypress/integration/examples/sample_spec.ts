import { Home } from '../pages/home';

describe('Site Search', () => {
  it('Should query for user entered term', () => {
    const home = new Home().navigate();
    const search = home.openSearch();
    const result = search.search('flexbox');

    result.assertUrl('flexbox');
  });
});
