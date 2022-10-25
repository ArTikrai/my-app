import * as React from 'react';
import HomeService from 'services/home-service';
import HomeSwiper from './components/home-swiper';

const HomePage = () => {
  const [homeMovies, setHomeMovies] = React.useState([]);
  const [foundHomeMovie, setFoundHomeMovie] = React.useState([]);

  const handleFetchedMovies = async () => {
    const fetchedMovies = await HomeService.fetchAll();
    setHomeMovies(fetchedMovies);
  };

  const homeMovieId = (id) => {
    const foundMovies = homeMovies.find((c) => c.id === id);
    setFoundHomeMovie(foundMovies);
  };

  React.useEffect(() => { handleFetchedMovies(); }, []);

  return (
    <HomeSwiper homeMovies={homeMovies} homeMovieId={homeMovieId} foundHomeMovie={foundHomeMovie} />
  );
};

export default HomePage;
