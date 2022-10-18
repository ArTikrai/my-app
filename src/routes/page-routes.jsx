import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/main-layout';
import WatchlistPage from 'pages/whatchlist-page';
import HomePage from '../pages/home-page';
import MoviesPage from '../pages/movies-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
      <Route path="watchlist" element={<WatchlistPage />} />
    </Route>
  </Routes>

);

export default PageRoutes;
