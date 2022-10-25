import * as React from 'react';
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { Image, TypographyLimited } from 'components';
import { useNavigate } from 'react-router-dom';

const WatchlistCard = ({
  id,
  title,
  description,
  img,
  date,
  category,
}) => {
  const navigate = useNavigate();

  return (
    <Card sx={{
      display: 'flex', flexDirection: 'column', height: '100%', position: 'relative',
    }}
    >
      <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
        <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
      </Box>

      <CardContent sx={{ p: 2, flexGrow: 1 }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <Typography variant="h6" component="div">{title}</Typography>
          <Typography variant="subtitle" component="div" color="primary">{`${date} `}</Typography>
        </Box>
        <Typography variant="subtitle" component="div">{category.title}</Typography>
        <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>

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

export default WatchlistCard;
