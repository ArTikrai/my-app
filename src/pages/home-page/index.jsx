import * as React from 'react';
import HomeService from 'services/home-service';
import HomeSwiper from './components/swiper';

const HomePage = () => {
  const [homeMovies, setHomeMovies] = React.useState([]);

  const handleFetchedMovies = async () => {
    const fetchedMovies = await HomeService.fetchAll();
    setHomeMovies(fetchedMovies);
  };

  React.useEffect(() => { handleFetchedMovies(); }, []);

  return (
    <HomeSwiper homeMovies={homeMovies} />
  );
};

export default HomePage;
