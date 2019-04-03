import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { useTranslation } from 'react-i18next';

import { PrimaryButton } from '../../components/button/primary-button';
import { Layout } from '../../containers/layout';
import { useStationsQuery, StationOrderByInput } from '../../graphql';
import { ReCard } from '../../components/re-card';
import { ReCardLink } from '../../components/re-card/card-link';
import { PageLoader } from '../../components/page-loader';

import { useStyles } from './styles';
import { ReSearch } from '../../components/input/re-search';

const placeHolderImage =
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80';

const HomePage: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const { t } = useTranslation(['stations', 'common']);
  const { loading, error, data } = useStationsQuery({
    variables: {
      first: 25,
      skip: 0,
      orderBy: StationOrderByInput.CreatedAtDesc,
    },
  });

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
              <ReSearch placeholder={t('common:search')} />
              <PrimaryButton>{t('stations:createStation')}</PrimaryButton>
            </div>
            <div className={classes.section}>
              <Typography gutterBottom component="h3" variant="h5" className={classes.sectionTitle}>
                {t('stations:discoverStations')}
              </Typography>
              <div className={classes.stationsList}>
                {data.stations.map(station => {
                  if (!station) {
                    return null;
                  }

                  let stringifiedTagNames: string | undefined;
                  if (station.tags) {
                    stringifiedTagNames = station.tags.map(tag => `#${tag.name}`).join(' ');
                  }

                  return (
                    <ReCard
                      key={station.id}
                      title={station.name}
                      media={{ image: placeHolderImage, alt: 'Placeholder image' }}
                      content={stringifiedTagNames}
                      links={
                        <>
                          <ReCardLink icon={<FiberManualRecordIcon color="primary" />} text="0 online" />
                          <ReCardLink icon={<ShowChartIcon color="inherit" />} text="6 pinned" />
                        </>
                      }
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
