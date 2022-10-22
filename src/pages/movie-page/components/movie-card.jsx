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
import FavoriteIcon from '@mui/icons-material/Favorite';
import useAuth from 'hooks/useAuth';
import { createAuthWatchlistThunkAction } from 'store/auth/auth-actions';

const MovieCardById = ({
  movie,
  onEdit,
  onDelete,
}) => {
  const [liked, setLiked] = React.useState(false);

  const { dispatch } = useAuth();

  const createWatchlistMovie = async (userProps) => {
    await dispatch(createAuthWatchlistThunkAction(userProps));
    setLiked(true);
    // await fetchAllMovies();
  };

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      maxHeight: '745px',
      flexGrow: 1,
      maxWidth: '550px',
      margin: 'auto',
      mb: 20,
    }}
    >
      <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
        <Image src={movie.img} sx={{ position: 'absolute', top: 0, left: 0 }} />
        <IconButton
          sx={{
            position: 'absolute',
            top: 5,
            right: 5,
            color: 'red',
          }}
          onClick={() => createWatchlistMovie(movie.id)}
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
          <Typography variant="h5" component="div">{movie.title}</Typography>
          <Typography variant="h6" component="div" color="primary.main">{`${movie.price} €`}</Typography>
        </Box>
        <Typography variant="subtitle" component="div" sx={{ mb: 2 }}>{movie.category.title}</Typography>
        <TypographyLimited variant="body2" color="text.secondary">{movie.description}</TypographyLimited>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          size="small"
          onClick={onEdit}
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
    </Card>
  );
};

export default MovieCardById;
