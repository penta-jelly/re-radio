import { Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from 'components/button/primary-button';
import { ReSearch } from 'components/input/re-search';
import { PageLoader } from 'components/page-loader';
import { ReCard } from 'components/re-card';
import { ReCardLink } from 'components/re-card/card-link';
import { Layout } from 'containers/layout';
import { StationOrderByInput, useStationsQuery } from 'app-graphql';

import { useStyles } from './styles';

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
              <ReSearch placeholder={t('common:search')} id="search" />
              <PrimaryButton id="create-station">{t('stations:createStation')}</PrimaryButton>
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
                      media={{ image: placeHolderImage, alt: station.name, linkTo: `/station/${station.slug}` }}
                      content={stringifiedTagNames}
                      id={`station-${station.slug}`}
                      links={
                        <>
                          <ReCardLink
                            icon={<FiberManualRecordIcon color="primary" />}
                            text="0 online"
                            data-role="online-users-label"
                          />
                          <ReCardLink
                            icon={<ShowChartIcon color="inherit" />}
                            text="6 pinned"
                            data-role="pinned-label"
                          />
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
