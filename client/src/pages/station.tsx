import { makeStyles, Theme } from '@material-ui/core';

import React from 'react';
import { Layout } from 'containers/layout';
import { StationContext, StationLayout, useStationContextState } from 'modules';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    width: '100%',
    height: '100%',
  },
}));

interface RouteParams {
  slug: string;
}

const Station: React.FC = props => {
  const classes = useStyles();
  const contextState = useStationContextState();
  return (
    <StationContext.Provider value={contextState}>
      <Layout drawer={contextState.drawer}>
        <div className={classes.container}>
          <StationLayout />
        </div>
      </Layout>
    </StationContext.Provider>
  );
};

export default Station;
