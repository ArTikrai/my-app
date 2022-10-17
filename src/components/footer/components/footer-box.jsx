import * as React from 'react';
import { BottomNavigation, Box, Typography } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterBox = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        width: '100%',
        py: '50px',
      }}
    >
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
          <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
          <BottomNavigationAction label="Youtube" icon={<YouTubeIcon />} />
        </BottomNavigation>
      </Box>
      <Box>
        <Typography>Conditions of Use</Typography>
        <Typography>Privacy & Policy</Typography>
        <Typography>Press Room</Typography>
      </Box>
      <Box>
        <Typography>
          &reg;
          {new Date().getFullYear()}
          &nbsp;
          MovieBox. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterBox;
