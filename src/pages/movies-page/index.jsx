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

  const fantasyMovies = movies.filter((arr) => arr.category === 'Fantasy');
  const actionMovies = movies.filter((arr) => arr.category === 'Action');
  const comedyMovies = movies.filter((arr) => arr.category === 'Comedy');

  return (
    <>
      <SwiperMovie filteredMovies={fantasyMovies} />
      <SwiperMovie filteredMovies={actionMovies} />
      <SwiperMovie filteredMovies={comedyMovies} />
    </>
  );
};

export default MoviesPage;
