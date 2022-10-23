const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/api/categories`);
  const items = await response.json();

  return items;
};

const CategoryService = {
  fetchAll,
};

export default CategoryService;
