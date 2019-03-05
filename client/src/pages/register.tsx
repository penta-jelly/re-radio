import React, { useState } from 'react';
import { mount, route } from 'navi';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from 'react-apollo-hooks';
import { useHistory } from 'react-navi';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';

import { RegisterInput, RegisterDocument, RegisterVariables } from '../graphql';

type DataKeys = keyof RegisterInput;
type Data = { [key in DataKeys]: string };

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    maxWidth: '50rem',
  },
});

const Register = () => {
  const classNames = useStyles();
  const registerMutation = useMutation<Boolean, RegisterVariables>(RegisterDocument);
  const history = useHistory();
  const [registerError, setRegisterError] = useState<string | null>(null);

  return (
    <div className={classNames.root}>
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
        onSubmit={async values => {
          setRegisterError(null);

          try {
            const response = await registerMutation({ variables: { data: values } });
            if (response.data) {
              history.replace('/');
              return;
            }

            if (response.errors) {
              setRegisterError(response.errors[0].message);
            }
          } catch (error) {
            setRegisterError(error.message);
          }
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur, touched, errors }) => (
          <form noValidate onSubmit={handleSubmit} className={classNames.form}>
            <Typography variant="h3" gutterBottom align="center">
              Register
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
            <Button variant="contained" color="primary" size="large" type="submit">
              Register
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default mount({
  '/': route({
    async getView(_request) {
      return <Register />;
    },
  }),
});
