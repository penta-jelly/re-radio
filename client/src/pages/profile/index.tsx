import { Grid } from '@material-ui/core';
import { PageLoader } from 'components/page-loader';
import { Layout } from 'containers/layout';
import { DetailUserProfile, UserProfileSongs, UserProfileStations } from 'modules/user';
import { useSnackbar } from 'notistack';
import { useCurrentUserQuery } from 'operations';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useStyles } from './styles';

interface RouteParams {
  username?: string;
}

const UserProfilePage: React.FC = () => {
  const history = useHistory();
  const params = useParams<RouteParams>();
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  const { data, loading, error } = useCurrentUserQuery();
  const username = React.useMemo<string | undefined>(() => {
    if (params.username) return params.username;
    if (loading || error) return undefined;
    if (data) return data.user.username;
  }, [params.username, data, loading, error]);

  const ownedProfile = React.useMemo<boolean>(() => {
    //  tslint:disable curly
    if (loading || error) return false;
    if (!params.username) return true;
    if (data && data.user.username === params.username) return true;
    return false;
    //  tslint:enable curly
  }, [params.username, data, loading, error]);

  React.useEffect(() => {
    if (error && !params.username) {
      history.push('/');
      enqueueSnackbar('You need to login to access this page', { variant: 'warning', preventDuplicate: true });
    }
  }, [error, history, params.username, enqueueSnackbar]);

  if (!username) {
    return <PageLoader />;
  }
  return (
    <Layout drawer={{ collapsed: true, open: true }}>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={3}>
          <DetailUserProfile username={username} editable={ownedProfile} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container>
            <Grid item xs={12}>
              <UserProfileStations username={username} editable={ownedProfile} />
            </Grid>
            <Grid item xs={12}>
              <UserProfileSongs username={username} editable={ownedProfile} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default UserProfilePage;
