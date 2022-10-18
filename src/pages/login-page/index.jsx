import React from 'react';
import { TextField } from '@mui/material';
import AuthForm from 'components/auth-form';

const LoginPage = () => (
  <AuthForm
    sx={{ mt: '100px' }}
    title="Prisijungimas"
    btnText="Prisijungti"
  >
    <TextField
      name="email"
      label="El. paštas"
      type="email"
      variant="filled"
      fullWidth
    />
    <TextField
      name="password"
      label="Slaptažodis"
      type="password"
      variant="filled"
      fullWidth
    />
  </AuthForm>
);

export default LoginPage;
