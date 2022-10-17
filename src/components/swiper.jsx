import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import {
  Navigation,
  EffectFade,
} from 'swiper';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/effect-fade';
import MovieCard from 'pages/movies-page/components/movie-card';

const SwiperMovie = ({
  filteredMovies,
  removeMovieCard,
  editMovieCard,
}) => (
  <Swiper
    style={{
      marginTop: 70,
      height: '100%',
      paddingBottom: 5,
      paddingInline: 10,
    }}
    modules={[Navigation, EffectFade]}
    breakpoints={{
      500: { slidesPerView: 1 },
      550: { slidesPerView: 2 },
      800: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
      1410: { slidesPerView: 5 },
    }}
    spaceBetween={10}
    speed={800}
    loop
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    {filteredMovies.map(({
      id,
      title,
      img,
      category,
      description,
      price,
    }) => (
      <SwiperSlide key={id} style={{ height: 'auto' }}>
        <MovieCard
          key={id}
          title={title}
          description={description}
          img={img}
          category={category}
          price={price}
          onDelete={() => removeMovieCard(id)}
          onEdit={() => editMovieCard(id)}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperMovie;
