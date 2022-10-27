import * as React from 'react';
import { TextField, Alert } from '@mui/material';
import { useFormik } from 'formik';
import AuthForm from 'components/auth-form';
import useAuth from 'hooks/useAuth';
import {
  authClearErrorsAction,
  createLoginThunkAction,
} from 'store/auth/auth-actions';
import { useSearchParams } from 'react-router-dom';
import validationSchema from './components/log-validation';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const { error, dispatch } = useAuth();
  const [serachParams] = useSearchParams();

  const onSubmitRef = React.useRef((credentials) => {
    const redirect = serachParams.get('redirect');
    dispatch(createLoginThunkAction(credentials, redirect));
    // eslint-disable-next-line no-use-before-define
    resetForm();
  });

  const {
    dirty, values, errors, touched, isValid,
    handleChange, handleBlur, handleSubmit, resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmitRef.current,
  });

  return (
    <>
      {error && (
        <Alert sx={{ fontSize: 20 }} severity="error" onClose={() => dispatch(authClearErrorsAction)}>
          {error}
        </Alert>
      )}
      <AuthForm
        sx={{ mt: '100px', px: 1 }}
        title="Login"
        onSubmit={handleSubmit}
        disabled={!dirty || !isValid}
      >
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="filled"
          fullWidth
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="filled"
          fullWidth
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
      </AuthForm>
    </>
  );
};

export default LoginPage;
