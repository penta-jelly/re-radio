import { Avatar, Button, FormHelperText, TextField, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import { LoginInput, useLoginMutation } from 'operations';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { useStyles } from './styles';

type DataKeys = keyof LoginInput;
type Data = { [key in DataKeys]: string };

interface Props {
  postLogin?(): void;
}

export const LoginForm: React.FC<Props> = ({ postLogin }) => {
  const classNames = useStyles();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginMutation] = useLoginMutation();
  const { t } = useTranslation('common');
  const onLogin = useCallback(
    async (values: Data) => {
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
          postLogin && postLogin();
          return;
        }

        if (response.errors) {
          setLoginError(response.errors[0].message);
        }
      } catch (error) {
        setLoginError(error.message);
      }
    },
    [loginMutation, postLogin],
  );

  return (
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
          <Typography variant="h5" gutterBottom align="center">
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
            autoFocus
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
          <div className={classNames.iconRow}>
            <Avatar className={classNames.facebookIcon}>
              <FaFacebookF />
            </Avatar>
            <Avatar className={classNames.googleIcon}>
              <FaGoogle />
            </Avatar>
            <Avatar className={classNames.githubIcon}>
              <FaGithub />
            </Avatar>
          </div>
          <Typography className={classNames.forgotPassRow} variant="caption">
            <Link to="">Forgot your password</Link>
          </Typography>
          <div className={classNames.iconRow}>
            <Typography variant="caption">
              <Link to="/register" id="register-link">
                Register a new account
              </Link>
            </Typography>
          </div>
        </form>
      )}
    </Formik>
  );
};
