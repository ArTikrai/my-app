// import AuthService from 'services/auth-service';

// import {
//   AUTH_LOADING,
//   AUTH_SUCCESS,
//   AUTH_FAILURE,
//   AUTH_LOGOUT,
//   AUTH_CLEAR_ERRORS,
//   AUTH_INITIALIZED,
//   AUTH_CLEAR_REDIRECT,
//   AUTH_CLEAR_MESSAGE,
//   RESET_REGISTER_STATE,
//   MOVIE_MODAL_STATE,
//   MOVIE_BEING_UPDATE_STATE,
// } from './movie-action-types';

// export const authInitializedAction = { type: AUTH_INITIALIZED };

// export const authLoadingAction = { type: AUTH_LOADING };

// export const registerSuccess = (action) => ({ type: RESET_REGISTER_STATE, payload: action });

// export const authClearErrorsAction = { type: AUTH_CLEAR_ERRORS };

// export const authClearMessageAction = { type: AUTH_CLEAR_MESSAGE };

// export const authLogoutAction = { type: AUTH_LOGOUT };

// export const authClearRedirect = { type: AUTH_CLEAR_REDIRECT };

// export const createMovieSuccessAction = ({ user, token, redirect }) => ({
//   type: AUTH_SUCCESS,
//   payload: {
//     user,
//     token,
//     redirect,
//   },
// });

// export const createAuthFailureAction = (message) => ({
//   type: AUTH_FAILURE,
//   payload: { message },
// });

// export const createRegisterThunkAction = (credentials) => async (dispatch) => {
//   try {
//     dispatch(authLoadingAction);
//     await AuthService.register(credentials);

//     dispatch(registerSuccess(true));
//   } catch (err) {
//     const authFailureAction = createAuthFailureAction(err.message);
//     dispatch(authFailureAction);
//   }
// };

// export const createAuthInitializeThunkAction = (token) => async (dispatch) => {
//   try {
//     dispatch(authLoadingAction);
//     const authData = await AuthService.auth(token);
//     const authSuccessAction = createAuthSuccessAction(authData);

//     dispatch(authSuccessAction);
//   } catch (err) {
//     const authFailureAction = createAuthFailureAction('Token has expired');
//     dispatch(authFailureAction);
//   } finally {
//     dispatch(authInitializedAction);
//   }
// };