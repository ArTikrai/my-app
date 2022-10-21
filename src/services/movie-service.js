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

const fetchByIdArr = async (idArr) => {
  const idsParamsString = idArr.map((id) => `id=${id}`).join('&');
  const items = await fetchAll(idsParamsString);

  return items;
};

const fetchCategories = async () => {
  const response = await fetch(`${domain}/categories`);
  const categories = await response.json();

  return categories;
};

const MovieService = {
  fetchAll,
  fetchCategories,
  fetchByIdArr,
  fetchById,
};

export default MovieService;
