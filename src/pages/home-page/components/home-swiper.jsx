import * as React from 'react';
import { Box } from '@mui/material';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import HomeMovieCard from './movie-card';

const HomeSwiper = ({
  homeMovies,
  homeMovieId,
  foundHomeMovie,
  editHomeMovieCard,
  removeHomeMovieCard,
}) => {
  const [homeSwiper, setHomeSwiper] = React.useState(true);

  return (
    <Box>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={homeSwiper && ({
          delay: 7000,
          disableOnInteraction: false,
        })}
        style={{
          height: '100vh',
          width: '100%',
        }}
      >
        {homeMovies.map(({
          id,
          title,
          description,
          img,
          trailer,
        }) => (
          <SwiperSlide key={id}>
            <HomeMovieCard
              id={id}
              title={title}
              description={description}
              img={img}
              trailer={trailer}
              homeMovies={homeMovies}
              homeMovieId={homeMovieId}
              foundHomeMovie={foundHomeMovie}
              editHomeMovieCard={editHomeMovieCard}
              removeHomeMovieCard={removeHomeMovieCard}
              setHomeSwiper={setHomeSwiper}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default HomeSwiper;
