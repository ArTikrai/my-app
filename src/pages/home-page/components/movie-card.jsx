import * as React from 'react';
import
{
  Box,
  Button,
  Card,
  Typography,
} from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { TypographyLimited } from 'components';
import YoutubeEmbed from 'components/trailer/components/YoutubeEmbed';
import Iframe from 'components/trailer/components/iframe';
import { Background } from '.';

const HomeMovieCard = ({
  id,
  img,
  title,
  description,
  trailer,
}) => (
  <Card>
    <Background key={id} component="img" src={img} />
    <Box
      sx={{
        width: '350px',
        color: 'white',
        position: 'absolute',
        top: '30%',
        left: '10%',
        zIndex: 5,
      }}
    >
      <Typography variant="h3">
        { title }
      </Typography>
      <TypographyLimited sx={{ my: '20px' }}>
        { description }
      </TypographyLimited>
      <Button variant="contained" sx={{ display: 'flex', gap: '7px' }}>
        <PlayCircleIcon />
        Watch Trailer
      </Button>
      {/* <Iframe sx={{ zIndex: 100 }} trailer="rokGy0huYEA" /> */}
    </Box>
  </Card>
);

export default HomeMovieCard;
