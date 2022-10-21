import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import NavbarDrawer from './components/drawer';
import * as Nav from './components/index';

const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar>
        <NavbarDrawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MovieBox
        </Typography>
        <Nav.Link to="/auth/login">
          <Button sx={{ color: 'white' }} color="inherit">Login</Button>
        </Nav.Link>
        <Box>/</Box>
        <Nav.Link to="/auth/register">
          <Button sx={{ fontSize: '15px', color: 'white' }} color="inherit">Register</Button>
        </Nav.Link>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
