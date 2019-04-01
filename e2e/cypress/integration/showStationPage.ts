import stationPage from '../support/StationPage';

describe('Show Station Page', () => {
  const StationPage = stationPage('/station');

  it('should open station page', () => {
    StationPage.navigate();
  });

  it('should have layout texts', () => {
    StationPage.checkStationLayout();
  });
});
