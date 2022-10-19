const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'homeMovies';

const fetchAll = async () => {
  const response = await fetch(`${domain}/api/${collectionName}`);
  const items = await response.json();

  return items;
};

const HomeService = {
  fetchAll,
};

export default HomeService;
