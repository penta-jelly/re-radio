import { PageLoader } from 'components/page-loader';
import { LoginForm } from 'modules';
import { useSnackbar } from 'notistack';
import { LoginInput, useCurrentUserQuery } from 'operations';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useStyles } from './styles';

type DataKeys = keyof LoginInput;
type Data = { [key in DataKeys]: string };

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

  const postLogin = React.useCallback(async () => {
    history.replace('/');
    window.location.reload();
  }, [history]);

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
