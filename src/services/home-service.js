const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'homeMovies';

const fetchAll = async () => {
  const response = await fetch(`${domain}/api/${collectionName}`);
  const items = await response.json();

  return items;
};

const fetchById = async (id) => {
  const response = await fetch(`${domain}/api/${collectionName}/${id}`);
  if (response.status === 404) {
    throw new Error(`HomeMovie with id '${id}' not found.`);
  }
  const item = await response.json();

  return item;
};

const create = async (credetials) => {
  const response = await fetch(`${domain}/api/${collectionName}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credetials),
  });
  const userData = await response.json();

  if (response.status >= 400) {
    throw new Error(userData.message);
  }

  return userData;
};

const update = async (id, movieProps) => {
  const response = await fetch(`${domain}/api/${collectionName}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieProps),
  });

  const movie = await response.json();

  return movie;
};

const remove = async (id) => {
  await fetch(`${domain}/api/${collectionName}/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const HomeService = {
  fetchAll,
  fetchById,
  create,
  update,
  remove,
};

export default HomeService;
