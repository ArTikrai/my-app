import * as React from 'react';
import MovieService from 'services/movie-service';
import { SwiperMovie } from 'components';
import CategoryTitle from './components/category-title';

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
      <CategoryTitle style={{ marginTop: 150 }} categoryTitle="Fantasy" />
      <SwiperMovie filteredMovies={fantasyMovies} />
      <CategoryTitle categoryTitle="Action" />
      <SwiperMovie filteredMovies={actionMovies} />
      <CategoryTitle categoryTitle="Comedy" />
      <SwiperMovie filteredMovies={comedyMovies} />
    </>
  );
};

export default MoviesPage;
