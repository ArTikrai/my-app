import * as React from 'react';
import { Box } from '@mui/material';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import HomeMovieCard from './movie-card';

const HomeSwiper = ({ homeMovies }) => (
  <Box>
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      style={{
        height: '100%',
        position: 'absolute',
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {homeMovies.map(({
        id,
        title,
        description,
        img,
      }) => (
        <SwiperSlide key={id}>
          <HomeMovieCard
            id={id}
            title={title}
            description={description}
            img={img}
            homeMovies={homeMovies}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);

export default HomeSwiper;
