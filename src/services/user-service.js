const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'users';

const create = async (userProps) => {
  const response = await fetch(`${domain}/auth/${collectionName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userProps),
  });

  const user = await response.json();

  return user;
};

const UserService = {
  create,
};

export default UserService;
