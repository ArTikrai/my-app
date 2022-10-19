import React from 'react';
import WatchlistContext from 'contexts/watchlist-context';

const useCart = () => React.useContext(WatchlistContext);

export default useCart;
