import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar>
        <Toolbar>
          <Link href="/" sx={{ textDecoration: 'none', flexGrow: 1 }}>
            <Typography sx={{ color: 'white', fontWeight: '600' }}>EngagedMD</Typography>
          </Link>
          <Box component={'div'} >
            <Link href="/likes">
              <Typography sx={{ color: 'white' }}>Favorites</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;