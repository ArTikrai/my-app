import * as React from 'react';
import { Box } from '@mui/material';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import YoutubeEmbed from 'components/trailer/components/YoutubeEmbed';
import HomeMovieCard from './movie-card';

const HomeSwiper = ({ homeMovies }) => (
  <Box>
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
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
            homeMovies={homeMovies}
          />
          <YoutubeEmbed sx={{ zIndex: 1000 }} embedId={trailer} />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);

export default HomeSwiper;
