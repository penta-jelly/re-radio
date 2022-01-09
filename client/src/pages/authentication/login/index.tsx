import { useSnackbar } from 'notistack';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageLoader } from 'components/page-loader';
import { AppContext } from 'containers/app';
import { LoginForm } from 'modules/user';
import { useCurrentUserQuery } from 'operations';
import { useStyles } from './styles';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const classNames = useStyles();
  const currentUserQuery = useCurrentUserQuery();
  const { enqueueSnackbar } = useSnackbar();
  React.useEffect(() => {
    if (currentUserQuery.data) {
      history.push('/');
      enqueueSnackbar('You have to logout first to access this page.', { preventDuplicate: true, variant: 'warning' });
    }
  }, [enqueueSnackbar, history, currentUserQuery]);

  const appContext = React.useContext(AppContext);
  const postLogin = React.useCallback(() => {
    appContext.resetClient();
    history.replace('/');
  }, [appContext, history]);

  if (currentUserQuery.loading) {
    return <PageLoader />;
  }

  return (
    <div className={classNames.container}>
      <LoginForm postLogin={postLogin} />
    </div>
  );
};

export default Login;
