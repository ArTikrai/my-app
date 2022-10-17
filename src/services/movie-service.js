const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'movies';
const expandCategories = '?_expand=category';

const formatMovies = ({
  id,
  title,
  description,
  price,
  img,
  categoryId,
  category,
}) => ({
  id,
  title,
  description,
  price,
  img,
  categoryId,
  category: category.title,
});

const fetchAll = async () => {
  const response = await fetch(`${domain}/${collectionName}${expandCategories}`);
  const movies = await response.json();

  return movies.map(formatMovies);
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
