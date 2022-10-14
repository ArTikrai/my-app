const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'movies';

const fetchAll = async () => {
  const response = await fetch(`${domain}/${collectionName}`);
  const items = await response.json();

  return items;
};

const MovieService = {
  fetchAll,
};

export default MovieService;
