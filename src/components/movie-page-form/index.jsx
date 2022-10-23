import * as React from 'react';
import { Box, Modal } from '@mui/material';
import MovieService from 'services/movie-service';
import useAuth from 'hooks/useAuth';
import { beingUpdateState, modalState } from 'store/auth/auth-actions';
import MovieForm from './components/movie-form';

const MoviePageForm = () => {
  const movieState = useAuth();
  const { dispatch } = useAuth();
  const [movies, setMovies] = React.useState([]);

  const closeModal = () => {
    dispatch(modalState(false));
  };

  const fetchedAllMovies = async () => {
    const fetchedMovies = await MovieService.fetchAll();
    setMovies(fetchedMovies);
  };

  const createMovieCard = async (movieProps) => {
    await MovieService.create(movieProps);
    await fetchedAllMovies();
  };

  const editMovieCard = (id) => {
    const foundMovies = movies.find((c) => c.id === id);
    dispatch(beingUpdateState(foundMovies));
  };
  // editMovieCard();

  const updateMovieCard = async (movieProps) => {
    await MovieService.update(movieState.beingEdit.id, movieProps);
    await fetchedAllMovies();
  };
  // const removeMovieCard = async (id) => {
  //   await MovieService.remove(id);
  //   fetchAllMovies();
  // };
  React.useEffect(() => { fetchedAllMovies(movies); });

  return (
    <Box sx={{
      gap: { xs: 4, xxl: 0 },
    }}
    >
      {/* <MenuAppBar openModal={() => setModalOpen(true)} /> */}
      <Modal open={movieState.modalOpen} onClose={closeModal}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 400,
        }}
        >
          <MovieForm
            onSubmit={movieState.beingEdit ? updateMovieCard : createMovieCard}
            formTitle={movieState.beingEdit ? 'Movie Card Edit' : 'Add New Movie Card'}
            submitText={movieState.beingEdit ? 'Update' : 'Create'}
            color={movieState.beingEdit ? 'warning' : 'success'}
            initValues={movieState.beingEdit}
          />
        </Box>
      </Modal>
      {/* <SwiperMovie
        movies={movies}
        removeMovieCard={removeMovieCard}
        editMovieCard={editMovieCard}
      /> */}
    </Box>
  );
};
export default MoviePageForm;
