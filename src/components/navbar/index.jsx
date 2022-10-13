import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import NavbarDrawer from './components/drawer';

const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar>
        <NavbarDrawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MovieBox
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
