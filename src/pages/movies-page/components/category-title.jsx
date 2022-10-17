import * as React from 'react';
import { Typography } from '@mui/material';

const CategoryTitle = ({ categoryTitle }) => (
  <Typography
    align="left"
    variant="h4"
    sx={{
      color: 'black',
      mt: '70px',
      mb: '15px',
      ml: '50px',
    }}
  >
    {categoryTitle}
  </Typography>
);

export default CategoryTitle;
