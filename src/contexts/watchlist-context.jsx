import * as React from 'react';
import { useMemo } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

const WatchlistContext = React.createContext();

export const WatchlistProvider = ({ children, userID }) => {
  const [watchlistMovies, setWatchlistMovies] = useLocalStorage('watchlistMovies', []);
  const currentWatchcList = useMemo(() => watchlistMovies[userID] || [], [userID, watchlistMovies]);

  console.log('context watchlistMovies', watchlistMovies);

  const watchlistContextValue = React.useMemo(() => ({
    watchlistMovies: currentWatchcList,

    getWatchlistMovie: (id) => currentWatchcList.find((x) => x.id === id),

    addWatchlistMovies: (id) => {
      console.log('Added movie', id);
      setWatchlistMovies({ ...watchlistMovies, [userID]: [...currentWatchcList, { id }] });
    },

    deleteWatchlistMovies: (id) => setWatchlistMovies(
      { ...watchlistMovies, [userID]: currentWatchcList.filter((x) => x.id !== id) },
    ),

  }), [watchlistMovies, currentWatchcList, setWatchlistMovies, userID]);

  return (
    <WatchlistContext.Provider value={watchlistContextValue}>{children}</WatchlistContext.Provider>
  );
};

export default WatchlistContext;
