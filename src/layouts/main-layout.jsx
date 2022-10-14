import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'components';

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default MainLayout;
