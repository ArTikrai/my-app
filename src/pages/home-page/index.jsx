import * as React from 'react';
import useAuth from 'hooks/useAuth';
import { Box, Modal } from '@mui/material';
import { homeModalState } from 'store/auth/auth-actions';
import HomeService from 'services/home-service';
import HomeSwiper from './components/home-swiper';
import HomeMovieForm from './components/home-movie-form';

const HomePage = () => {
  const movieState = useAuth();
  const { dispatch } = useAuth();
  const [homeMovies, setHomeMovies] = React.useState([]);
  const [foundHomeMovie, setFoundHomeMovie] = React.useState([]);
  const [homeMovieBeingEdited, setHomeMovieBeingEdited] = React.useState(null);

  const editHomeMovieCard = (id) => {
    const foundMovies = homeMovies.find((c) => c.id === id);
    setHomeMovieBeingEdited(foundMovies);
  };
  const handleFetchedMovies = async () => {
    const fetchedMovies = await HomeService.fetchAll();
    setHomeMovies(fetchedMovies);
  };

  const closeModal = () => {
    dispatch(homeModalState(false));
    setHomeMovieBeingEdited(null);
  };

  const createMovieCard = async (movieProps) => {
    await HomeService.create(movieProps);
    dispatch(homeModalState(false));
    setHomeMovieBeingEdited(null);
    await handleFetchedMovies();
  };

  const updateMovieCard = async (movieProps) => {
    await HomeService.update(homeMovieBeingEdited.id, movieProps);
    dispatch(homeModalState(false));
    setHomeMovieBeingEdited(null);
    await handleFetchedMovies();
  };

  const removeHomeMovieCard = async (id) => {
    await HomeService.remove(id);
    await handleFetchedMovies();
  };

  const homeMovieId = (id) => {
    const foundMovies = homeMovies.find((c) => c.id === id);
    setFoundHomeMovie(foundMovies);
  };

  React.useEffect(() => { handleFetchedMovies(); }, []);

  return (
    <>
      <Box sx={{
        gap: { xs: 2, xxl: 0 },
      }}
      >
        <Modal open={movieState.homeModalOpen} onClose={closeModal}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 400,
          }}
          >
            <HomeMovieForm
              onSubmited={homeMovieBeingEdited ? updateMovieCard : createMovieCard}
              formTitle={homeMovieBeingEdited ? 'Home Card Edit' : 'Add New Home Card'}
              submitText={homeMovieBeingEdited ? 'Update' : 'Create'}
              color={homeMovieBeingEdited ? 'warning' : 'success'}
              initValues={homeMovieBeingEdited}
            />
          </Box>
        </Modal>
      </Box>
      <HomeSwiper
        editHomeMovieCard={editHomeMovieCard}
        removeHomeMovieCard={removeHomeMovieCard}
        homeMovies={homeMovies}
        homeMovieId={homeMovieId}
        foundHomeMovie={foundHomeMovie}
      />
    </>
  );
};

export default HomePage;
