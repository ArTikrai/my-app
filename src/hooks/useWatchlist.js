import * as React from 'react';
import WatchlistContext from 'contexts/watchlist-context';

const useWatchlist = () => React.useContext(WatchlistContext);

export default useWatchlist;
