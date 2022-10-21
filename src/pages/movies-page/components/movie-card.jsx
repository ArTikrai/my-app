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

const MovieCard = ({
  id,
  title,
  img,
  description,
  category,
  price,
  onDelete,
  onEdit,
}) => {
  const {
    getWatchlistMovie,
    addWatchlistMovies,
    deleteWatchlistMovies,
  } = useWatchlist();

  const movieInWatchlist = getWatchlistMovie(id);
  console.log(movieInWatchlist);
  const [liked, setLiked] = React.useState(false);

  const handleWatchlistMovies = () => {
    if (movieInWatchlist !== id) {
      addWatchlistMovies({ id });
      setLiked(true);
    } else if (movieInWatchlist === id) {
      deleteWatchlistMovies({ id });
      setLiked(false);
    }
  };

  React.useEffect(() => {
    setLiked();
  }, []);

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
          onClick={handleWatchlistMovies}
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
          <Typography variant="h6" component="div" color="primary.main">{`${price} €`}</Typography>
        </Box>
        <Typography variant="subtitle" component="div" sx={{ mb: 2 }}>{category.title}</Typography>
        <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
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

export default MovieCard;
