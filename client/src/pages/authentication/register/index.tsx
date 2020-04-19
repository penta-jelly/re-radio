import { useSnackbar } from 'notistack';
import React, { useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageLoader } from 'components/page-loader';
import { RegisterForm } from 'modules/user';
import { useCurrentUserQuery } from 'operations';
import { useStyles } from './styles';

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const classNames = useStyles();
  const postRegister = useCallback(() => history.replace('/'), [history]);

  const currentUserQuery = useCurrentUserQuery();
  const { enqueueSnackbar } = useSnackbar();
  React.useEffect(() => {
    if (currentUserQuery.data) {
      history.push('/');
      enqueueSnackbar('You have to logout first to access this page.', { preventDuplicate: true, variant: 'warning' });
    }
  }, [enqueueSnackbar, history, currentUserQuery]);
  if (currentUserQuery.loading) {
    return <PageLoader />;
  }
  return (
    <div className={classNames.container}>
      <RegisterForm postRegister={postRegister} />
    </div>
  );
};

export default Register;
