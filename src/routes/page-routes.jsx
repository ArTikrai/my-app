import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/main-layout';
import WatchlistPage from 'pages/whatchlist-page';
import LoginPage from 'pages/login-page';
import AuthLayout from 'layouts/auth-layout';
import HomePage from '../pages/home-page';
import MoviesPage from '../pages/movies-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="watchlist" element={<WatchlistPage />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="register" element={<RegisterPage />} /> */}
      </Route>
    </Route>
  </Routes>

);

export default PageRoutes;
