import * as React from 'react';
import { Box, Modal } from '@mui/material';
// import MovieService from 'services/movie-service';
import useAuth from 'hooks/useAuth';
import { homeTrailerState } from 'store/auth/auth-actions';
import YoutubeEmbed from './components/YoutubeEmbed';

const HomeTrailer = ({ trailer, setHomeSwiper }) => {
  const movieState = useAuth();
  const { dispatch } = useAuth();
  console.log(setHomeSwiper);
  const closeModal = () => {
    dispatch(homeTrailerState(false));
    setHomeSwiper(true);
  };

  return (
    <Box sx={{
      gap: { xs: 4, xxl: 0 },
    }}
    >
      <Modal open={movieState.homeTrailerModal} onClose={closeModal}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 400,
        }}
        >
          <YoutubeEmbed embedId={trailer} />
        </Box>
      </Modal>
    </Box>
  );
};
export default HomeTrailer;
