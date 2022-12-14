const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'api/movies';
const relationsParams = 'joinBy=categoryId';

const fetchAll = async (paramsString = null) => {
  const urlParamsString = paramsString ? `&${paramsString}` : '';

  const response = await fetch(`${domain}/${collectionName}?${relationsParams}${urlParamsString}`);
  const items = await response.json();

  return items;
};

const fetchById = async (id) => {
  const response = await fetch(`${domain}/${collectionName}/${id}?${relationsParams}`);
  if (response.status === 404) {
    throw new Error(`Movie with id '${id}' not found.`);
  }
  const item = await response.json();

  return item;
};

const create = async (credetials) => {
  const response = await fetch(`${domain}/${collectionName}`, {
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
  const response = await fetch(`${domain}/${collectionName}/${id}`, {
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
  await fetch(`${domain}/${collectionName}/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const fetchByIdArr = async (idArr) => {
  const idsParamsString = idArr.map((id) => `id=${id}`).join('&');
  const items = await fetchAll(idsParamsString);

  return items;
};

const MovieService = {
  fetchAll,
  fetchByIdArr,
  fetchById,
  create,
  update,
  remove,
};

export default MovieService;
