import * as React from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const WatchlistContext = React.createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlistMovies, setWatchlistMovies] = useLocalStorage('watchlistMovies', []);

  const watchlistContextValue = React.useMemo(() => ({
    watchlistMovies,

    getWatchlistMovie: (id) => watchlistMovies.find((x) => x.id === id),

    addWatchlistMovies: ({ id, count }) => setWatchlistMovies([...watchlistMovies, { id, count }]),

    deleteWatchlistMovies: (id) => setWatchlistMovies(watchlistMovies.filter((x) => x.id !== id)),

  }), [watchlistMovies, setWatchlistMovies]);

  return (
    <WatchlistContext.Provider value={watchlistContextValue}>{children}</WatchlistContext.Provider>
  );
};

export default WatchlistContext;
