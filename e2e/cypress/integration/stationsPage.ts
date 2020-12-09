import StationsPage from '../support/StationsPage';

describe('Show Stations Page', () => {
  const stationsPage = StationsPage();

  it('should be able to visit', () => {
    stationsPage.navigate();
  });

  it('should render basic elements', () => {
    cy.get(stationsPage.elements.searchInput).should('be.visible');
    cy.get(stationsPage.elements.createStationButton).should('be.visible');
    cy.contains(stationsPage.elements.discoverStationsText).should('be.exist');
  });

  it('should render station cards', () => {
    stationsPage.checkStationCard('normie-station');
    stationsPage.checkStationCard('station-a');
    stationsPage.checkStationCard('station-b');
    stationsPage.checkStationCard('station-c');
    stationsPage.checkStationCard('station-d');
    stationsPage.checkStationCard('station-e');
    stationsPage.checkStationCard('station-f');
    stationsPage.checkStationCard('station-g');
    stationsPage.checkStationCard('station-h');
    stationsPage.checkStationCard('station-i');
  });
});

describe('Create a Station', () => {
  const stationsPage = StationsPage();

  it('should open & close create station form popup when click on create button', () => {
    stationsPage.navigate(true);
    cy.get(stationsPage.elements.createStationButton).click();

    cy.get(stationsPage.elements.createStation.form).should('be.visible');

    cy.get(stationsPage.elements.createStation.form)
      .find(stationsPage.elements.createStation.stationNameInput)
      .should('be.visible');

    cy.get(stationsPage.elements.createStation.form)
      .find(stationsPage.elements.createStation.stationSlugInput)
      .should('be.visible');

    cy.get(stationsPage.elements.createStation.form)
      .find(stationsPage.elements.createStation.submitButton)
      .should('be.visible');

    cy.get(stationsPage.elements.createStation.form)
      .find(stationsPage.elements.createStation.showMoreButton)
      .should('be.visible');

    cy.get(stationsPage.elements.createStation.modal).click();
    cy.get(stationsPage.elements.createStation.form).should('not.exist');
  });

  describe('form validation', () => {
    it('should not be able to submit if user is not logged in yet', () => {
      stationsPage.navigate(false);

      cy.get(stationsPage.elements.createStationButton).click();

      cy.get(stationsPage.elements.createStation.form)
        .find(stationsPage.elements.createStation.stationNameInput)
        .type(`This station will not be submitted`);

      cy.get(stationsPage.elements.createStation.form)
        .find(stationsPage.elements.createStation.stationSlugInput)
        .type(`this-will-not-go-well`);

      cy.get(stationsPage.elements.createStation.form).find(stationsPage.elements.createStation.submitButton).click();

      cy.contains('You need to login first.').should('be.visible');
    });

    it('should not be able to submit if station name or slug is empty', () => {
      stationsPage.navigate();

      cy.get(stationsPage.elements.createStationButton).click();

      cy.get(stationsPage.elements.createStation.form).find(stationsPage.elements.createStation.submitButton).click();

      cy.get(stationsPage.elements.createStation.form).contains('name is a required field').should('be.visible');

      cy.get(stationsPage.elements.createStation.form).contains('slug is a required field').should('be.visible');
    });

    it('should validate station tags field', () => {
      stationsPage.navigate();

      cy.get(stationsPage.elements.createStationButton).click();
      cy.get(stationsPage.elements.createStation.form).find(stationsPage.elements.createStation.showMoreButton).click();

      cy.get(stationsPage.elements.createStation.form)
        .find(stationsPage.elements.createStation.stationTagsInput)
        .type('# b12');
      cy.get(stationsPage.elements.createStation.form).submit();
      cy.get(stationsPage.elements.createStation.form).contains('Must be a valid tags format').should('be.visible');

      cy.get(stationsPage.elements.createStation.form)
        .find(stationsPage.elements.createStation.stationTagsInput)
        .clear()
        .type('#b12 cde');
      cy.get(stationsPage.elements.createStation.form).submit();
      cy.get(stationsPage.elements.createStation.form).contains('Must be a valid tags format').should('be.visible');

      cy.get(stationsPage.elements.createStation.form)
        .find(stationsPage.elements.createStation.stationTagsInput)
        .clear()
        .type('#b12-cde a332e #polics');
      cy.get(stationsPage.elements.createStation.form).submit();
      cy.get(stationsPage.elements.createStation.form).contains('Must be a valid tags format').should('be.visible');

      cy.get(stationsPage.elements.createStation.form)
        .find(stationsPage.elements.createStation.stationTagsInput)
        .clear()
        .type('#b12 #polics');
      cy.get(stationsPage.elements.createStation.form).submit();
      cy.get(stationsPage.elements.createStation.form).contains('Must be a valid tags format').should('not.exist');
    });
  });

  it('should submit a simple station with minimal information', () => {
    stationsPage.navigate(true);
    const randomId = Math.round(Math.random() * 1000);

    cy.get(stationsPage.elements.createStationButton).click();

    cy.get(stationsPage.elements.createStation.form)
      .find(stationsPage.elements.createStation.stationNameInput)
      .type(`Awesome Station ${randomId}`);

    cy.get(stationsPage.elements.createStation.form)
      .find(stationsPage.elements.createStation.stationSlugInput)
      .type(`awesome-station${randomId}`);

    cy.get(stationsPage.elements.createStation.form).find(stationsPage.elements.createStation.submitButton).click();

    cy.get(stationsPage.elements.createStation.form).should('not.exist');
    stationsPage.checkStationCard(`awesome-station${randomId}`, `Awesome Station ${randomId}`);
  });

  it('should submit a simple station with full information', () => {
    stationsPage.navigate(true);
    const randomId = Math.round(Math.random() * 1000);

    cy.get(stationsPage.elements.createStationButton).click();
    cy.get(stationsPage.elements.createStation.form).find(stationsPage.elements.createStation.showMoreButton).click();

    cy.get(stationsPage.elements.createStation.form)
      .find(stationsPage.elements.createStation.stationNameInput)
      .type(`Awesome Station ${randomId}`);

    cy.get(stationsPage.elements.createStation.form)
      .find(stationsPage.elements.createStation.stationSlugInput)
      .type(`awesome-station${randomId}`);

    cy.get(stationsPage.elements.createStation.form)
      .find(stationsPage.elements.createStation.stationDescriptionInput)
      .type(`This is my awesome station`);

    cy.get(stationsPage.elements.createStation.form)
      .find(stationsPage.elements.createStation.stationTagsInput)
      .type(`#awesome #radio #re-radio`);

    cy.get(stationsPage.elements.createStation.form).find(stationsPage.elements.createStation.submitButton).click();

    cy.get(stationsPage.elements.createStation.form).should('not.exist');
    stationsPage.checkStationCard(`awesome-station${randomId}`, `Awesome Station ${randomId}`, [
      'awesome',
      'radio',
      're-radio',
    ]);
  });
});
