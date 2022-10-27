import * as React from 'react';
import
{
  Box,
  Button,
  Card,
  Typography,
} from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { TypographyLimited } from 'components';
import HomeTrailer from 'components/trailer';
import useAuth from 'hooks/useAuth';
import { homeTrailerState, homeModalState } from 'store/auth/auth-actions';
import { Background } from '.';

const HomeMovieCard = ({
  id,
  img,
  title,
  description,
  homeMovieId,
  foundHomeMovie,
  setHomeSwiper,
  removeHomeMovieCard,
  editHomeMovieCard,
}) => {
  const { dispatch, user } = useAuth();

  const adminOn = user?.role === 'ADMIN';

  return (
    <Card>
      <Background key={id} component="img" src={img} />
      <Box
        sx={{
          width: '350px',
          color: 'white',
          position: 'absolute',
          top: { xs: '20%', sm: '30%' },
          left: { xs: '0%', sm: '10%' },
          zIndex: 5,
          px: 2,
        }}
      >
        <Typography variant="h3">
          { title }
        </Typography>
        <TypographyLimited sx={{ mt: { xs: '30px', sm: '20px' }, mb: { xs: '155px', sm: '20px' } }}>
          { description }
        </TypographyLimited>
        <Button
          variant="contained"
          sx={{ display: 'flex', gap: '7px' }}
          onClick={() => {
            homeMovieId(id);
            dispatch(homeTrailerState(true));
            setHomeSwiper(false);
          }}
        >
          <PlayCircleIcon />
          Watch Trailer
        </Button>
        <HomeTrailer setHomeSwiper={setHomeSwiper} trailer={foundHomeMovie.trailer} />
        {adminOn && (
        <Box sx={{ mt: { xs: '45px', sm: '35px' }, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              dispatch(homeModalState(true));
              editHomeMovieCard(id);
            }}
            sx={{ color: 'white' }}
          >
            Edit
          </Button>
          <Button
            size="small"
            // color="white"
            variant="contained"
            onClick={() => removeHomeMovieCard(id)}
            sx={{ color: 'white' }}
          >
            Delete
          </Button>
        </Box>
        )}
      </Box>
    </Card>
  );
};

export default HomeMovieCard;
