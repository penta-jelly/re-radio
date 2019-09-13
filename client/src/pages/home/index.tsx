import { Modal, Slide, Typography } from '@material-ui/core';
import { PrimaryButton } from 'components/button/primary-button';
import { ReSearch } from 'components/input/re-search';
import { PageLoader } from 'components/page-loader';
import { Layout } from 'containers/layout';
import { useRouter } from 'hooks/use-router';
import { CreateStationForm, StationsList } from 'modules';
import { StationOrderByInput, StationsDocument, StationsQueryVariables, useStationsQuery } from 'operations';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdRadio as StationIcon } from 'react-icons/md';
import { Route } from 'react-router-dom';
import { useStyles } from './styles';

const HomePage: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { t } = useTranslation(['stations', 'common']);

  const queryVariables = React.useMemo<StationsQueryVariables>(
    () => ({
      first: 25,
      skip: 0,
      orderBy: StationOrderByInput.CreatedAtDesc,
    }),
    [],
  );

  const { loading, error, data } = useStationsQuery({
    variables: queryVariables,
    fetchPolicy: 'network-only',
    pollInterval: 1800000, // 3 minutes
  });

  const { match, history } = useRouter();
  const openCreateStationModal = React.useCallback(() => {
    history.push(`${match.url}/create-station`);
  }, [match, history]);

  const closeCreateStationModal = React.useCallback(() => {
    history.push(`${match.url}`);
  }, [match, history]);

  return (
    <Layout>
      <div className={classes.root}>
        {loading ? (
          <PageLoader />
        ) : error || !data ? (
          <div>{t('common:error')}</div>
        ) : (
          <>
            <div className={classes.header}>
              <ReSearch placeholder={t('common:search')} id="search" />
              <PrimaryButton id="create-station" onClick={openCreateStationModal}>
                <StationIcon className={classes.iconButton} />
                {t('stations:createStation')}
              </PrimaryButton>
            </div>
            <div className={classes.section}>
              <Typography gutterBottom component="h3" variant="h5" className={classes.sectionTitle}>
                {t('stations:discoverStations')}
              </Typography>
              <div className={classes.stationsList}>
                <StationsList data={data} />
              </div>
            </div>
            <Route
              path={`${match.url}/create-station`}
              component={() => (
                <Modal open onClose={closeCreateStationModal} id="create-station-modal">
                  <Slide in direction="left">
                    <div className={classes.modal}>
                      <CreateStationForm
                        postSubmit={{
                          refetchQueries: [{ query: StationsDocument, variables: queryVariables }],
                          redirectTo: match.url,
                        }}
                      />
                    </div>
                  </Slide>
                </Modal>
              )}
            />
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
