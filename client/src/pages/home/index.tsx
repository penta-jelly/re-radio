import { Modal, Slide, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdRadio as StationIcon } from 'react-icons/md';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import {
  OrderEnum,
  StationsDocument,
  StationsQueryVariables,
  useOnStationChangedSubscription,
  useStationsQuery,
} from 're-radio-common/lib/operations';
import { PrimaryButton } from 'components/button/primary-button';
import { NotFoundError } from 'components/error';
import { ReSearch } from 'components/input/re-search';
import { PageLoader } from 'components/page-loader';
import { Layout } from 'containers/layout';
import { CreateStationForm, StationsList } from 'modules/station';
import { useStyles } from './styles';

const HomePage: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { t } = useTranslation(['stations', 'common']);

  const queryVariables = React.useMemo<StationsQueryVariables>(() => {
    return {
      pagination: { take: 25 },
      order: { createdAt: OrderEnum.Desc },
    };
  }, []);

  const { loading, error, data, refetch } = useStationsQuery({
    variables: queryVariables,
    fetchPolicy: 'network-only',
    pollInterval: 1800000, // 3 minutes
  });

  useOnStationChangedSubscription({
    onSubscriptionData: async ({ subscriptionData: { data } }) => {
      if (!data) return;
      const { onStationChanged } = data;
      if (!onStationChanged) return;
      refetch();
    },
  });

  const history = useHistory();
  const match = useRouteMatch();
  if (!match) {
    throw new Error(`Match not found. The "$stationSlug" is not existed in query param.`);
  }
  const openCreateStationModal = React.useCallback(() => {
    history.push(`${match.url}/create-station`);
  }, [match, history]);

  const closeCreateStationModal = React.useCallback(() => {
    history.push(`${match.url}`);
  }, [match, history]);

  const formModalComponent = React.useCallback(
    () => (
      <Modal open onClose={closeCreateStationModal} id="create-station-modal">
        <Slide in direction="left">
          <div className={classes.modal}>
            <CreateStationForm
              postSubmit={{
                refetchQueries: [{ query: StationsDocument, variables: queryVariables }],
                redirectTo: match ? match.url : undefined,
              }}
            />
          </div>
        </Slide>
      </Modal>
    ),
    [classes.modal, closeCreateStationModal, match, queryVariables],
  );

  let content: React.ReactNode;
  if (data) {
    content = (
      <div className={classes.root}>
        <div className={classes.header}>
          <ReSearch placeholder={t('common:search')} id="search" iconButton />
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
        <Route path={`${match ? match.url : ''}/create-station`} component={formModalComponent} />
      </div>
    );
  } else if (loading) {
    content = <PageLoader />;
  } else if (error) {
    content = <NotFoundError />;
  }
  return <Layout>{content}</Layout>;
};

export default HomePage;
