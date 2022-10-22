const domain = process.env.REACT_APP_SERVER_ADDRESS;
// const collectionName = 'users';

const createWatchlist = async (formData, token) => {
  const response = await fetch(`${domain}/api/watchlist`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  const user = await response.json();

  return user;
};

const WatchlistService = {
  createWatchlist,
};

export default WatchlistService;
