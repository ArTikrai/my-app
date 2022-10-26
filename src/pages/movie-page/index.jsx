import * as React from 'react';
import { useParams } from 'react-router-dom';
import MovieService from 'services/movie-service';
import { Box, Alert } from '@mui/material';
import MovieCardById from './components/movie-card';
import { Background } from './components';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const fetchedMovie = await MovieService.fetchById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        setErrorMsg(`Not found by id: '${movieId}'`);
      }
    })();
  }, [movieId]);

  return (
    <Box sx={{
      mx: 4,
      height: '100vh',
    }}
    >
      <Background />
      {errorMsg && (<Alert severity="error">{errorMsg}</Alert>)}
      {movie && <MovieCardById movie={movie} />}
    </Box>
  );
};

export default MoviePage;
