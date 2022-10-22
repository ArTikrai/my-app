import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import useAuth from 'hooks/useAuth';
import { authLogoutAction } from 'store/auth/auth-actions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NavbarDrawer from './components/drawer';
import * as Nav from './components/index';

const Navbar = () => {
  const { loggedIn, user, dispatch } = useAuth();
  const UserMenuIconRef = React.useRef(null);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <NavbarDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MovieBox
          </Typography>
          {loggedIn ? (
            <>
              <IconButton
                sx={{ mr: 7, alignSelf: 'center' }}
                ref={UserMenuIconRef}
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <AccountCircleIcon sx={{ width: 37, height: 37, color: 'white' }} />
              </IconButton>
              <Menu
                sx={{ mt: '5px' }}
                id="menu-appbar"
                anchorEl={UserMenuIconRef.current}
                open={userMenuOpen}
                onClose={() => setUserMenuOpen(false)}
              >
                <MenuItem>
                  <Typography>{user.fullname}</Typography>
                </MenuItem>
                <Divider sx={{ my: 1 }} />
                <MenuItem
                  onClick={() => {
                    dispatch(authLogoutAction);
                    setUserMenuOpen(false);
                  }}
                >
                  <Typography>Logout</Typography>
                  <LogoutIcon sx={{ ml: '15px' }} />
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Nav.Link to="/auth/login">
                <Button sx={{ color: 'white' }} color="inherit">Login</Button>
              </Nav.Link>
              <Box>/</Box>
              <Nav.Link to="/auth/register">
                <Button sx={{ fontSize: '15px', color: 'white' }} color="inherit">Register</Button>
              </Nav.Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
