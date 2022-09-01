const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'homePageMovies';

const fetchAll = async () => {
  const response = await fetch(`${domain}/${collectionName}`);
  const items = await response.json();

  return items;
};

const HomeService = {
  fetchAll,
};

export default HomeService;
