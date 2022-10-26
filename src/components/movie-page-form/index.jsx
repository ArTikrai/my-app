import * as React from 'react';
import { Box, Modal } from '@mui/material';
import MovieService from 'services/movie-service';
import useAuth from 'hooks/useAuth';
import { modalState, beingUpdateState } from 'store/auth/auth-actions';
import MovieForm from './components/movie-form';

const MoviePageForm = () => {
  const movieState = useAuth();
  const { dispatch } = useAuth();

  const closeModal = () => {
    dispatch(modalState(false));
    dispatch(beingUpdateState(null));
  };

  const createMovieCard = async (movieProps) => {
    await MovieService.create(movieProps);
    dispatch(modalState(false));
    window.location.reload();
  };

  const updateMovieCard = async (movieProps) => {
    await MovieService.update(movieState.beingEdit.id, movieProps);
    dispatch(modalState(false));
    dispatch(beingUpdateState(null));
    window.location.reload();
  };

  return (
    <Box sx={{
      gap: { xs: 2, xxl: 0 },
    }}
    >
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
            onSubmited={movieState.beingEdit ? updateMovieCard : createMovieCard}
            formTitle={movieState.beingEdit ? 'Movie Card Edit' : 'Add New Movie Card'}
            submitText={movieState.beingEdit ? 'Update' : 'Create'}
            color={movieState.beingEdit ? 'warning' : 'success'}
            initValues={movieState.beingEdit}
          />
        </Box>
      </Modal>
    </Box>
  );
};
export default MoviePageForm;
