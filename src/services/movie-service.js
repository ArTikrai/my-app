const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'api/movies';
const relationsParams = 'joinBy=categoryId';

// const formatMovies = ({
//   id,
//   title,
//   description,
//   price,
//   img,
//   categoryId,
//   category,
// }) => ({
//   id,
//   title,
//   description,
//   price,
//   img,
//   categoryId,
//   category: category.title,
// });

const fetchAll = async (paramsString = null) => {
  const urlParamsString = paramsString ? `&${paramsString}` : '';

  const response = await fetch(`${domain}/${collectionName}?${relationsParams}${urlParamsString}`);
  const items = await response.json();

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
};

export default MovieService;
