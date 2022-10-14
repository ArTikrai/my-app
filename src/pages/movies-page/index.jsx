import * as React from 'react';
import MovieService from 'services/movie-service';
import { SwiperMovie } from 'components';

const MoviesPage = () => {
  const [movies, setMovies] = React.useState([]);

  const handleFetchedMovies = async () => {
    const fetchedMovies = await MovieService.fetchAll();
    setMovies(fetchedMovies);
  };

  React.useEffect(() => { handleFetchedMovies(); }, []);

  return (
    <SwiperMovie movies={movies} />
  );
};

export default MoviesPage;
