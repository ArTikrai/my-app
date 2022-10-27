import * as React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import useWatchlist from 'hooks/useWatchlist';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { homeTrailerState } from 'store/auth/auth-actions';
import HomeTrailer from 'components/trailer';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useAuth from 'hooks/useAuth';
import { Background } from './index';

const MovieCardById = ({
  movie,
}) => {
  const [liked, setLiked] = React.useState(false);
  const { dispatch } = useAuth();

  const {
    watchlistMovies: currentWatchcList,
    getWatchlistMovie,
    addWatchlistMovies,
    deleteWatchlistMovies,
  } = useWatchlist();

  const currentMovie = getWatchlistMovie(movie.id);

  const handleWatchlistMovies = () => {
    if (currentMovie?.id !== movie.id) {
      addWatchlistMovies(movie.id);
    } else if (currentMovie?.id === movie.id) {
      deleteWatchlistMovies(movie.id);
      setLiked(false);
    }
  };

  React.useEffect(() => {
    if (currentWatchcList) {
      currentWatchcList?.forEach((element) => {
        if (element.id === movie.id) {
          setLiked(true);
        }
      });
    }
  }, [currentWatchcList, movie.id]);

  return (
    <Card>
      <Background key={movie.id} component="img" sx={{ mt: { xs: '54px', sm: '64px' } }} src={movie.bigImg} />
      <IconButton
        sx={{
          position: 'absolute',
          top: 85,
          right: 20,
          color: 'red',
          zIndex: 10,
        }}
        onClick={() => handleWatchlistMovies()}
      >
        { liked ? (
          <FavoriteIcon sx={{ width: 45, height: 45 }} />
        ) : (
          <FavoriteBorderIcon sx={{ width: 45, height: 45 }} />
        )}
      </IconButton>
      <Box
        sx={{
          width: '350px',
          position: 'absolute',
          color: 'white',
          top: '30%',
          left: { xs: '0%', sm: '10%' },
          zIndex: 5,
          px: 2,
        }}
      >
        <CardContent sx={{ p: 1, flexGrow: 1 }}>
          <Typography variant="h3" component="div" sx={{ mb: 4 }}>{movie.title}</Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'center',

          }}
          >
            <Typography variant="h5" component="div" sx={{ mb: 3 }}>{movie.category?.title}</Typography>
            <Typography variant="subtitle" component="div">{movie?.date}</Typography>
          </Box>
          <Typography variant="subtitle1" color="inherit" sx={{ pt: { xs: '20px', sm: '15px' } }}>{movie?.description}</Typography>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: '35px', sm: '20px' },
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              display: 'flex',
              gap: '7px',
              justifyItems: 'center',
              alignItems: 'center',
            }}
            onClick={() => {
              dispatch(homeTrailerState(true));
            }}
          >
            <PlayCircleIcon />
            <Typography>Watch trailer</Typography>
          </Button>
          <HomeTrailer trailer={movie?.trailer} />
          <Button
            variant="contained"
            size="small"
            sx={{ display: 'inline-flex', gap: '7px', justifyItems: 'center' }}
            onClick={() => {
              dispatch(homeTrailerState(true));
            }}
          >
            <PlayArrowIcon />
            <Typography>Play</Typography>
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default MovieCardById;
