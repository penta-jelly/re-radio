import React, { useState, useCallback } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import { Avatar, Typography, TextField, Button, FormHelperText } from '@material-ui/core';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

import { useRegisterMutation, RegisterInput } from 'operations';
import { useStyles } from './styles';

type DataKeys = keyof RegisterInput;
type Data = { [key in DataKeys]: string };

const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const classNames = useStyles();
  const registerMutation = useRegisterMutation();
  const [registerError, setRegisterError] = useState<string | null>(null);
  const { t } = useTranslation('common');
  const onRegister = useCallback(
    async (values: Data) => {
      setRegisterError(null);

      try {
        const response = await registerMutation({
          variables: {
            data: values,
          },
        });
        if (response.data && response.data.register.token) {
          localStorage.setItem('token', response.data.register.token);
          history.replace('/');
          return;
        }

        if (response.errors) {
          setRegisterError(response.errors[0].message);
        }
      } catch (error) {
        setRegisterError(error.message);
      }
    },
    [history, registerMutation],
  );

  return (
    <div className={classNames.container}>
      <Formik<Data>
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={yup.object().shape({
          username: yup.string().required('Username is required'),
          email: yup
            .string()
            .email('Invalid email address')
            .required('Email is required'),
          password: yup.string().required('Password is required'),
        })}
        onSubmit={onRegister}
      >
        {({ values, handleSubmit, handleChange, handleBlur, touched, errors }) => (
          <form noValidate onSubmit={handleSubmit} className={classNames.form} method="POST">
            <Typography variant="h3" gutterBottom align="center">
              {t('register')}
            </Typography>
            {registerError && <FormHelperText error>{registerError}</FormHelperText>}
            <TextField
              variant="outlined"
              value={values.email}
              label="Email"
              margin="normal"
              fullWidth
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email && !!errors.email && errors.email}
              error={touched.email && !!errors.email}
            />
            <TextField
              variant="outlined"
              value={values.username}
              label="Username"
              margin="normal"
              fullWidth
              id="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.username && !!errors.username && errors.username}
              error={touched.username && !!errors.username}
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
              id="register-button"
              className={classNames.button}
            >
              Register
            </Button>
            <div className={classNames.iconRow}>
              <Typography variant="caption">or signup using</Typography>
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

export default Register;
