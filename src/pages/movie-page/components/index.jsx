import { Box, styled } from '@mui/material';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  zIndex: 0,
  objectFit: 'cover',
  filter: 'brightness(80%)',
  backgroundColor: '#00003a',
});
