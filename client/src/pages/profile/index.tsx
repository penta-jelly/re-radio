import { Grid } from '@material-ui/core';
import React from 'react';
import { PageLoader } from '../../components/page-loader';
import { Layout } from '../../containers/layout';
import { useCurrentUserQuery } from '../../graphql';
import { useRouter } from '../../hooks/use-router';
import { DetailUserProfile, UserProfileSongs, UserProfileStations } from '../../modules/user';
import { useStyles } from './styles';

interface RouteParams {
  username?: string;
}

const UserProfilePage: React.FC = () => {
  const { match, history } = useRouter<RouteParams>();
  const classes = useStyles();

  const { data, loading, error } = useCurrentUserQuery();
  const username = React.useMemo<string | undefined>(() => {
    //  tslint:disable curly
    if (match.params.username) return match.params.username;
    if (loading || error) return undefined;
    if (data) return data.user.username;
    //  tslint:enable curly
  }, [match.params.username, data, loading, error]);

  const ownedProfile = React.useMemo<boolean>(() => {
    //  tslint:disable curly
    if (loading || error) return false;
    if (!match.params.username) return true;
    if (data && data.user.username === match.params.username) return true;
    return false;
    //  tslint:enable curly
  }, [match.params.username, data, loading, error]);

  React.useEffect(() => {
    if (error && !match.params.username) {
      history.push('/');
    }
  }, [error, match.params.username]);

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
