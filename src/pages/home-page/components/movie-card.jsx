import * as React from 'react';
import { Card } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Background } from '.';

const HomeMovieCard = ({
  id,
  img,
}) => (
  <Card>
    <Background key={id} component="img" src={img} />
    <PlayCircleIcon />
  </Card>
);

export default HomeMovieCard;
