import { WatchlistProvider } from 'contexts/watchlist-context';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from 'routes/page-routes';

const App = () => {
  const userData = localStorage.getItem('userId');

  return (
    <WatchlistProvider userID={userData}>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </WatchlistProvider>
  );
};
export default App;
