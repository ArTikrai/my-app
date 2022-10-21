import useAuth from 'hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { authClearRedirect } from 'store/auth/auth-actions';

const RequireUser = ({ children: Page }) => {
  const { loggedIn, redirect, dispatch } = useAuth();

  if (loggedIn) {
    if (redirect) {
      dispatch(authClearRedirect);

      return <Navigate to={redirect} />;
    }

    return <Navigate to="/movies" />;
  }

  return Page;
};

export default RequireUser;
