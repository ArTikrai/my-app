import * as React from 'react';
import MovieService from 'services/movie-service';
import { useSearchParams } from 'react-router-dom';
import { beingUpdateState } from 'store/auth/auth-actions';
import useAuth from 'hooks/useAuth';
import { SwiperMovie } from 'components';
import CategoryTitle from './components/category-title';

const MoviesPage = () => {
  const [movies, setMovies] = React.useState([]);
  const [searchParams] = useSearchParams();
  const { dispatch } = useAuth();

  const editMovieCard = (id) => {
    const foundMovies = movies.find((c) => c.id === id);
    dispatch(beingUpdateState(foundMovies));
  };

  const handleFetchedMovies = React.useCallback(async () => {
    const [fetchedMovies] = await Promise.all([MovieService.fetchAll(searchParams.toString())]);
    setMovies(fetchedMovies);
  }, [searchParams]);

  const removeMovieCard = async (id) => {
    await MovieService.remove(id);
    await handleFetchedMovies();
  };

  const fantasyMovies = movies.filter((arr) => arr.category.title === 'Fantasy');
  const actionMovies = movies.filter((arr) => arr.category.title === 'Action');
  const comedyMovies = movies.filter((arr) => arr.category.title === 'Comedy');

  React.useEffect(() => { handleFetchedMovies(); }, [handleFetchedMovies]);

  return (
    <>
      <CategoryTitle categoryTitle="Action" />
      <SwiperMovie
        filteredMovies={actionMovies}
        editMovieCard={editMovieCard}
        removeMovieCard={removeMovieCard}
      />
      <CategoryTitle categoryTitle="Comedy" />
      <SwiperMovie
        filteredMovies={comedyMovies}
        editMovieCard={editMovieCard}
        removeMovieCard={removeMovieCard}
      />
      <CategoryTitle style={{ marginTop: 5 }} categoryTitle="Fantasy" />
      <SwiperMovie
        filteredMovies={fantasyMovies}
        editMovieCard={editMovieCard}
        removeMovieCard={removeMovieCard}
      />
    </>
  );
};

export default MoviesPage;
