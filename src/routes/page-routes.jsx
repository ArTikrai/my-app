import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/main-layout';
import HomePage from '../pages/home-page';
import MoviesPage from '../pages/movies-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<MoviesPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
