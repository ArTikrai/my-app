import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'components';
import { Box } from '@mui/material';
import Footer from 'components/footer';

const MainLayout = () => (
  <Box>
    <Box sx={(theme) => ({ paddingTop: theme.mixins.navbar.height })}>
      <Navbar />
      <Outlet />
    </Box>
    <Box>
      <Footer />
    </Box>
  </Box>
);

export default MainLayout;
