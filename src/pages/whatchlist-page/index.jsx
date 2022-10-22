import * as React from 'react';
import {
  Box, Grid, Typography,
} from '@mui/material';
import MovieService from 'services/movie-service';
import useWatchlist from 'hooks/useWatchlist';
import WatchlistCard from './components/watchlist-card';

const getFormattedWatchlistMoves = async (watchlistMoviesData) => {
  const idArr = watchlistMoviesData.map((watchlistMovie) => watchlistMovie.id);
  const fetchedWatchlistMovies = await MovieService.fetchByIdArr(idArr);

  return fetchedWatchlistMovies;
};

const WatchlistPage = () => {
  const {
    watchlistMovies: watchlistMoviesData,
    // deleteWatchlistMovies,
  } = useWatchlist();
  const [watchlistMovies, setWatchlistMovies] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const formattedWatchlistMovies = await getFormattedWatchlistMoves(watchlistMoviesData);
      setWatchlistMovies(formattedWatchlistMovies);
    })();
  }, [watchlistMoviesData]);

  return (
    <Box sx={{
      display: 'flex',
      gap: { xs: 4, xxl: 0 },
      py: 2,
      px: 2,
    }}
    >
      {watchlistMovies.length > 0 ? (
        <Grid container spacing={2}>
          {watchlistMovies.map(({
            id,
            title,
            description,
            img,
            price,
            category,
          }) => (
            <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
              <WatchlistCard
                id={id}
                title={title}
                description={description}
                img={img}
                price={price}
                category={category}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="h3"
          sx={{
            color: 'error.main',
            width: '100%',
            textAlign: 'center',
            mt: 6,
            mb: 70,
          }}
        >
          Not found Movies
        </Typography>
      )}
    </Box>
  );
};

export default WatchlistPage;
