import * as React from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const WatchlistContext = React.createContext();

export const WatchlistProvider = ({ children, userID }) => {
  const [watchlistMovies, setWatchlistMovies] = useLocalStorage('watchlistMovies', []);

  const watchlistContextValue = React.useMemo(() => ({
    watchlistMovies,

    getWatchlistMovie: (id) => watchlistMovies[userID].find((x) => x.id === id),

    addWatchlistMovies: ({ id }) => {
      setWatchlistMovies({ ...watchlistMovies, [userID]: [...watchlistMovies[userID], { id }] });
    },

    deleteWatchlistMovies: (id) => setWatchlistMovies(
      { ...watchlistMovies, [userID]: watchlistMovies.filter((x) => x.id !== id) },
    ),

  }), [watchlistMovies, userID, setWatchlistMovies]);

  return (
    <WatchlistContext.Provider value={watchlistContextValue}>{children}</WatchlistContext.Provider>
  );
};

export default WatchlistContext;
