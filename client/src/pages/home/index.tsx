import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from 'components/button/primary-button';
import { ReSearch } from 'components/input/re-search';
import { PageLoader } from 'components/page-loader';
import { ReCard } from 'components/re-card';
import { ReCardLink } from 'components/re-card/card-link';
import { Layout } from 'containers/layout';
import { StationOrderByInput, useStationsQuery } from 'operations';
import { StationsList } from 'modules';
import { useStyles } from './styles';

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
                <StationsList data={data} />
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
