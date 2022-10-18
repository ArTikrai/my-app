import React from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

const AuthForm = ({
  title,
  disabled = false,
  onSubmit,
  children,
}) => (
  <Paper
    elevation={3}
    sx={{
      p: 4,
      width: 400,
      my: 4,
    }}
  >
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
      onSubmit={onSubmit}
    >
      <HowToRegIcon sx={{ fontSize: 100, color: 'primary.main' }} />
      <Typography component="h1" variant="h4">{title}</Typography>
      {children}
      <Button
        style={{ minWidth: '150px' }}
        type="submit"
        variant="contained"
        size="large"
        disabled={disabled}
      >
        <LoginIcon sx={{ fontSize: 35 }} />
      </Button>
    </Box>
  </Paper>
);

export default AuthForm;
