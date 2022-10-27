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
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { authLogoutAction, modalState, homeModalState } from 'store/auth/auth-actions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MoviePageForm from 'components/movie-page-form';
import NavbarDrawer from './components/drawer';
import * as Nav from './components/index';

const Navbar = () => {
  const { loggedIn, user, dispatch } = useAuth();
  const navigate = useNavigate();
  const adminOn = user?.role === 'ADMIN';
  const UserMenuIconRef = React.useRef(null);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <NavbarDrawer />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Box>
              <Button
                sx={{ color: 'white' }}
                onClick={() => navigate('/movies')}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: { xs: '18px', sm: '22px' } }}>
                  MovieBox
                </Typography>
              </Button>
            </Box>
            {loggedIn ? (
              <Box>
                <MoviePageForm />
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
                  {adminOn && (
                  <MenuItem
                    onClick={() => {
                      dispatch(homeModalState(true));
                      setUserMenuOpen(false);
                    }}
                  >
                    <Typography>Create HomePage Movie</Typography>
                  </MenuItem>
                  )}
                  {adminOn && (
                  <Divider sx={{ my: 1 }} />
                  )}
                  {adminOn && (
                  <MenuItem
                    onClick={() => {
                      dispatch(modalState(true));
                      setUserMenuOpen(false);
                    }}
                  >
                    <Typography>Create MoviesPage Movie</Typography>
                  </MenuItem>
                  )}
                  {adminOn && (
                  <Divider sx={{ my: 1 }} />
                  )}
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
              </Box>
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Nav.Link to="/auth/login">
                  <Button sx={{ fontSize: { xs: '13px', sm: '14px' }, color: 'white' }} color="inherit">Login</Button>
                </Nav.Link>
                <Typography>/</Typography>
                <Nav.Link to="/auth/register">
                  <Button sx={{ fontSize: { xs: '14px', sm: '15px' }, color: 'white' }} color="inherit">Register</Button>
                </Nav.Link>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
