import * as React from 'react';
import { TextField } from '@mui/material';
import AuthForm from 'components/auth-form';

const RegisterPage = () => (
  <AuthForm
    title="Registration"
  >
    <TextField
      name="email"
      label="Email"
      type="email"
      variant="filled"
      fullWidth
    />
    <TextField
      name="password"
      label="Password"
      type="password"
      variant="filled"
      fullWidth
    />
    <TextField
      name="passwordConfirmation"
      label="Repeat password"
      type="password"
      variant="filled"
      fullWidth
    />
    <TextField
      name="fullname"
      label="Fullname"
      type="text"
      variant="filled"
      fullWidth
    />
  </AuthForm>
);

export default RegisterPage;
