import React from 'react';
import { TextField } from '@mui/material';
import AuthForm from 'components/auth-form';

const LoginPage = () => (
  <AuthForm
    sx={{ mt: '100px' }}
    title="Login"
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
  </AuthForm>
);

export default LoginPage;
