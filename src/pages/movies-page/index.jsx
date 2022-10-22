import * as React from 'react';
import MovieService from 'services/movie-service';
import { useSearchParams } from 'react-router-dom';
import { SwiperMovie } from 'components';
import CategoryTitle from './components/category-title';

const MoviesPage = () => {
  const [movies, setMovies] = React.useState([]);
  const [searchParams] = useSearchParams();

  const handleFetchedMovies = React.useCallback(async () => {
    const [fetchedMovies] = await Promise.all([MovieService.fetchAll(searchParams.toString())]);
    setMovies(fetchedMovies);
  }, [searchParams]);

  React.useEffect(() => { handleFetchedMovies(); }, [handleFetchedMovies]);

  const fantasyMovies = movies.filter((arr) => arr.category.title === 'Fantasy');
  const actionMovies = movies.filter((arr) => arr.category.title === 'Action');
  const comedyMovies = movies.filter((arr) => arr.category.title === 'Comedy');

  return (
    <>
      <CategoryTitle style={{ marginTop: 5 }} categoryTitle="Fantasy" />
      <SwiperMovie filteredMovies={fantasyMovies} />
      <CategoryTitle categoryTitle="Action" />
      <SwiperMovie filteredMovies={actionMovies} />
      <CategoryTitle categoryTitle="Comedy" />
      <SwiperMovie filteredMovies={comedyMovies} />
    </>
  );
};

export default MoviesPage;
