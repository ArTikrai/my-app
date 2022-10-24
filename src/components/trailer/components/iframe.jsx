import { styled } from '@mui/material';

const Iframe = styled('iframe')(({ trailer }) => ({
  width: '853px',
  height: '480px',
  src: `https://www.youtube.com/embed/${trailer}`,
  allow: 'accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture',
  frameBorder: 0,
}));

export default Iframe;
