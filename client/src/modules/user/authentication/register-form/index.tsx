import { Avatar, Button, FormHelperText, TextField, Typography } from '@material-ui/core';
import { Formik, FormikHelpers } from 'formik';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import * as yup from 'yup';
import { RegisterInput, useRegisterMutation } from 're-radio-common/lib/operations';
import { useStyles } from './styles';

type DataKeys = keyof RegisterInput;
type Data = { [key in DataKeys]: string };

interface Props {
  postRegister?(): void;
}

export const RegisterForm: React.FC<Props> = (props) => {
  const classNames = useStyles();
  const [registerMutation] = useRegisterMutation();
  const { t } = useTranslation('common');
  const onRegister = useCallback(
    async (values: Data, formik: FormikHelpers<Data>) => {
      try {
        const response = await registerMutation({
          variables: {
            data: values,
          },
        });
        if (response.data?.register.token) {
          localStorage.setItem('token', response.data.register.token);
          props.postRegister?.();
          return;
        }
      } catch (error) {
        formik.setStatus(error.message);
      } finally {
        formik.setSubmitting(false);
      }
    },
    [props, registerMutation],
  );

  return (
    <Formik<Data>
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={yup.object().shape({
        username: yup.string().required('Username is required'),
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup.string().required('Password is required'),
      })}
      onSubmit={onRegister}
    >
      {({ values, isSubmitting, handleSubmit, handleChange, handleBlur, touched, errors, status }) => (
        <form noValidate onSubmit={handleSubmit} className={classNames.form} method="POST">
          <Typography variant="h5" gutterBottom align="center">
            {t('register')}
          </Typography>
          {status && <FormHelperText error>{status}</FormHelperText>}
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
            disabled={isSubmitting}
          >
            Register
          </Button>
          <div className={classNames.iconRow}>
            <Typography variant="caption">or login with</Typography>
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
  );
};
