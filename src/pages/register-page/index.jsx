import * as React from 'react';
import { TextField } from '@mui/material';
import AuthForm from 'components/auth-form';
import { useFormik } from 'formik';
import validationSchema from './components/reg-validation';

const initialValues = {
  email: '',
  emailConfirmation: '',
  password: '',
  passwordConfirmation: '',
  fullname: '',
};

const RegisterPage = () => {
  const onSubmit = (values) => {
    console.log('įvestos reikšmės');
    console.table(values);
  };

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
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
        label="Fullname"
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
  );
};

export default RegisterPage;
