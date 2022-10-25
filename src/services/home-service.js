const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'homeMovies';

const fetchAll = async () => {
  const response = await fetch(`${domain}/api/${collectionName}`);
  const items = await response.json();

  return items;
};

const fetchById = async (id) => {
  const response = await fetch(`${domain}/${collectionName}/${id}`);
  if (response.status === 404) {
    throw new Error(`HomeMovie with id '${id}' not found.`);
  }
  const item = await response.json();

  return item;
};

const HomeService = {
  fetchAll,
  fetchById,
};

export default HomeService;
