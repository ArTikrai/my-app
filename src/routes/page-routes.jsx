import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/main-layout';
import WatchlistPage from 'pages/whatchlist-page';
import LoginPage from 'pages/login-page';
import AuthLayout from 'layouts/auth-layout';
import RegisterPage from 'pages/register-page';
import HomePage from '../pages/home-page';
import MoviesPage from '../pages/movies-page';
import MoviePage from '../pages/movie-page';

import RequireVisitor from './require-visitor';
import RequireAuth from './require-auth';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="movie/:movieId" element={<MoviePage />} />
      <Route path="watchlist" element={<RequireAuth><WatchlistPage /></RequireAuth>} />

      <Route
        path="auth/"
        element={<RequireVisitor><AuthLayout /></RequireVisitor>}
      >
        <Route path="login" element={<RequireVisitor><LoginPage /></RequireVisitor>} />
        <Route path="register" element={<RequireVisitor><RegisterPage /></RequireVisitor>} />
      </Route>
    </Route>
  </Routes>

);

export default PageRoutes;
