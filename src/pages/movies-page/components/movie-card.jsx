import * as React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import { Image, TypographyLimited } from 'components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useWatchlist from 'hooks/useWatchlist';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { modalState } from 'store/auth/auth-actions';
import { useEffect } from 'react';

const MovieCard = ({
  id,
  title,
  img,
  description,
  category,
  date,
  onDelete,
  onEdit,
}) => {
  const navigate = useNavigate();
  const {
    watchlistMovies: currentWatchcList,
    getWatchlistMovie,
    addWatchlistMovies,
    deleteWatchlistMovies,
  } = useWatchlist();
  const [liked, setLiked] = React.useState(false);
  const { dispatch, user } = useAuth();

  const adminOn = user?.role === 'ADMIN';

  const currentMovie = getWatchlistMovie(id);

  const handleWatchlistMovies = () => {
    if (currentMovie?.id !== id) {
      addWatchlistMovies(id);
    } else if (currentMovie?.id === id) {
      deleteWatchlistMovies(id);
      setLiked(false);
    }
  };

  useEffect(() => {
    if (currentWatchcList) {
      currentWatchcList?.forEach((element) => {
        if (element.id === id) {
          setLiked(true);
        }
      });
    }
  }, [currentWatchcList, id]);

  return (
    <Card sx={{
      display: 'flex', flexDirection: 'column', position: 'relative', height: '100%', minHeight: '545px', flexGrow: 1,
    }}
    >
      <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
        <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
        <IconButton
          sx={{
            position: 'absolute',
            top: 5,
            right: 5,
            color: 'red',
          }}
          onClick={() => handleWatchlistMovies()}
        >
          { liked ? (
            <FavoriteIcon sx={{ width: 37, height: 37 }} />
          ) : (
            <FavoriteBorderIcon sx={{ width: 37, height: 37 }} />
          )}
        </IconButton>
      </Box>

      <CardContent sx={{ p: 2, flexGrow: 1 }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <Typography variant="h5" component="div">{title}</Typography>
          <Typography variant="subtitle" component="div" color="primary.main">{`${date}`}</Typography>
        </Box>
        <Typography variant="subtitle" component="div" sx={{ mb: 2 }}>{category.title}</Typography>
        <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
      </CardContent>
      {adminOn && (
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          size="small"
          onClick={() => {
            dispatch(modalState(true));
            onEdit(id);
          }}
          sx={{ color: 'warning.main' }}
        >
          Edit
        </Button>
        <Button
          size="small"
          onClick={onDelete}
          sx={{ color: 'error.main' }}
        >
          Delete
        </Button>
      </Box>
      )}
      <Box>
        <Button
          size="small"
          variant="contained"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => navigate(`/movie/${id}`)}
        >
          Watch
        </Button>
      </Box>
    </Card>
  );
};

export default MovieCard;
