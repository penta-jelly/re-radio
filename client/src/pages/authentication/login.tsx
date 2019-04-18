import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  TextField,
  Typography,
} from '@material-ui/core';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useStyles } from '../../styles/authentication/login';
import { Formik } from 'formik';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps, Link } from 'react-router-dom';
import * as yup from 'yup';
import { LoginInput, useLoginMutation } from '../../graphql';

type DataKeys = keyof LoginInput;
type Data = { [key in DataKeys]: string };

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const classNames = useStyles();
  const [loginError, setLoginError] = useState<string | null>(null);
  const loginMutation = useLoginMutation();
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
  const { t } = useTranslation('common');
  const onLogin = useCallback(async (values: Data) => {
    setLoginError(null);

    try {
      const loginWithEmailValue = {
        email: values.email,
        password: values.password,
      };
      const loginWithUsernameValue = {
        username: values.email,
        password: values.password,
      };
      const response = await loginMutation({
        variables: { data: values.email.includes('@') ? loginWithEmailValue : loginWithUsernameValue },
      });
      if (response.data && response.data.login.token) {
        localStorage.setItem('token', response.data.login.token);
        history.replace('/');
        return;
      }

      if (response.errors) {
        setLoginError(response.errors[0].message);
      }
    } catch (error) {
      setLoginError(error.message);
    }
  }, []);

  const handleClickRemember = useCallback(() => {
    setIsRememberMe(!isRememberMe);
  }, [isRememberMe]);

  return (
    <div className={classNames.container}>
      <Formik<Data>
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={yup.object().shape({
          email: yup.string().required('Email or Username is required'),
          password: yup.string().required('Password is required'),
        })}
        onSubmit={onLogin}
      >
        {({ values, handleSubmit, handleChange, handleBlur, touched, errors }) => (
          <form noValidate onSubmit={handleSubmit} method="POST" className={classNames.form}>
            <Typography variant="h3" gutterBottom align="center">
              {t('Login')}
            </Typography>
            {loginError && (
              <FormHelperText error id="login-error">
                {loginError}
              </FormHelperText>
            )}
            <TextField
              variant="outlined"
              value={values.email}
              label="Email or Username"
              margin="normal"
              fullWidth
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email && !!errors.email && errors.email}
              error={touched.email && !!errors.email}
            />
            <TextField
              variant="outlined"
              value={values.password}
              label="Password"
              margin="normal"
              fullWidth
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.password && !!errors.password && errors.password}
              error={touched.password && !!errors.password}
            />
            <div className={classNames.rememberRow}>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={isRememberMe} onChange={handleClickRemember} color="primary" />}
                  label="Remember me"
                />
              </FormGroup>
            </div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              className={classNames.button}
              id="login-button"
            >
              Login
            </Button>
            <Typography className={classNames.forgotPassRow} variant="caption">
              <Link to="">Forgot password?</Link>
            </Typography>
            <div className={classNames.iconRow}>
              <Typography variant="caption">
                or{' '}
                <Link to="/register" id="register-link">
                  signup
                </Link>{' '}
                using
              </Typography>
            </div>
            <div className={classNames.iconRow}>
              <Avatar className={classNames.facebookIcon}>
                <FaFacebookF />
              </Avatar>
              <Avatar className={classNames.googleIcon}>
                <FaGoogle />
              </Avatar>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
