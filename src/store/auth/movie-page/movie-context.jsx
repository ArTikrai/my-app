// /* eslint-disable react/jsx-no-constructed-context-values */
// import * as React from 'react';
// import useReducerWithThunk from '../../../hooks/useReducerWithThunk';
// import { authInitializedAction, createAuthInitializeThunkAction } from './movie-actions';
// import movieReducer from './movie-reducer';

// const initialAuthState = {
//   initialized: false,
//   loggedIn: false,
//   loading: false,
//   user: null,
//   error: null,
//   token: null,
//   redirect: null,
//   message: null,
//   successRegister: false,
//   modalOpen: false,
//   beingEdit: false,
// };

// const AuthContext = React.createContext(initialAuthState);

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducerWithThunk(movieReducer, initialAuthState);

//   React.useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       dispatch(createAuthInitializeThunkAction(token));
//     } else {
//       dispatch(authInitializedAction);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <AuthContext.Provider value={{
//       ...state,
//       dispatch,
//     }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
