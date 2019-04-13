import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Layout } from '../containers/layout';
import { StationLayout } from '../modules';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    width: `calc(100% - ${spacing(2)}px)`,
    height: `calc(100% - ${spacing(2)}px)`,
    margin: spacing(1),
  },
}));

interface RouteParams {
  slug: string;
}

const Station: React.FC<RouteComponentProps<RouteParams>> = props => {
  const classes = useStyles();
  return (
    <Layout drawer={{ open: true, collapsed: true }}>
      <div className={classes.container}>
        <StationLayout />
      </div>
    </Layout>
  );
};

export default withRouter(Station);
