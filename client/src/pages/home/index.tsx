import { Modal, Slide, Typography } from '@material-ui/core';
import React from 'react';
import { useApolloClient } from 'react-apollo';
import { useTranslation } from 'react-i18next';
import { MdRadio as StationIcon } from 'react-icons/md';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
import { PrimaryButton } from 'components/button/primary-button';
import { ReSearch } from 'components/input/re-search';
import { PageLoader } from 'components/page-loader';
import { Layout } from 'containers/layout';
import { CreateStationForm, StationsList } from 'modules/station';
import {
  MutationEnum,
  OrderEnum,
  StationDocument,
  StationQuery,
  StationsDocument,
  StationsQueryVariables,
  useOnStationChangedSubscription,
  useStationsQuery,
} from 'operations';
import { NotFoundError } from 'components/error';
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

  const { loading, error, data, updateQuery } = useStationsQuery({
    variables: queryVariables,
    fetchPolicy: 'network-only',
    pollInterval: 1800000, // 3 minutes
  });

  const client = useApolloClient();

  useOnStationChangedSubscription({
    onSubscriptionData: async ({ subscriptionData: { data } }) => {
      if (!data) return;
      const { onStationChanged } = data;
      if (!onStationChanged) return;
      const { entity, mutation } = onStationChanged;

      if (mutation === MutationEnum.Updated) {
        updateQuery((prev) => ({
          ...prev,
          stations: prev.stations.map((station) => {
            const { __typename, ...entityWithoutTypename } = entity;
            if (station.slug === entity.slug) return { ...station, ...entityWithoutTypename };
            return station;
          }),
        }));
      }
      if (mutation === MutationEnum.Deleted) {
        updateQuery((prev) => ({ ...prev, stations: prev.stations.filter((station) => station.slug !== entity.slug) }));
      }
      if (mutation === MutationEnum.Created) {
        const {
          data: { station },
        } = await client.query<StationQuery>({ query: StationDocument, variables: { slug: entity.slug } });
        updateQuery((prev) => ({ ...prev, stations: [...prev.stations, station] }));
      }
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
