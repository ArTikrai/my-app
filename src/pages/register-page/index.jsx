import * as React from 'react';
import {
  TextField,
  Alert,
} from '@mui/material';
import AuthForm from 'components/auth-form';
import { useFormik } from 'formik';
import { authClearErrorsAction, createRegisterThunkAction, registerSuccess } from 'store/auth/auth-actions';
import useAuth from 'hooks/useAuth';
import validationSchema from './components/reg-validation';

const initialValues = {
  email: '',
  emailConfirmation: '',
  password: '',
  passwordConfirmation: '',
  fullname: '',
};

const RegisterPage = () => {
  const { error, dispatch } = useAuth();
  const authState = useAuth();

  React.useEffect(() => {
    if (authState.successRegister) {
      setTimeout(() => {
        dispatch(registerSuccess(false));
      }, 5000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.successRegister]);

  const onSubmitRef = React.useRef((credentials) => {
    dispatch(createRegisterThunkAction(credentials));
    // eslint-disable-next-line no-use-before-define
    resetForm();
  });

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit, resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmitRef.current,
  });

  return (
    <>
      {error && (
        <Alert
          sx={{ fontSize: 20 }}
          severity="error"
          onClose={() => dispatch(authClearErrorsAction)}
        >
          {error}
        </Alert>
      )}
      {authState.successRegister && (
        <Alert
          sx={{ fontSize: 20 }}
          severity="success"
        >
          Registration Confirmed
        </Alert>
      )}
      <AuthForm
        title="Registration"
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
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <TextField
          name="passwordConfirmation"
          label="Repeat password"
          type="password"
          variant="filled"
          fullWidth
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
          helperText={touched.passwordConfirmation && errors.passwordConfirmation}
        />
        <TextField
          name="fullname"
          label="Full Name"
          type="text"
          variant="filled"
          fullWidth
          value={values.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.fullname && Boolean(errors.fullname)}
          helperText={touched.fullname && errors.fullname}
        />
      </AuthForm>
    </>
  );
};

export default RegisterPage;
