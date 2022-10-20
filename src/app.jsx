import { WatchlistProvider } from 'contexts/watchlist-context';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from 'routes/page-routes';

const App = () => (
  <WatchlistProvider>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </WatchlistProvider>
);
export default App;
