import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { StoreValue } from 'types/recipe';

/**
 * Header component. Displaying favorite recipe count on the top right nav bar
 */
const Header: React.FC = () => {
  const recipes = useSelector((state: StoreValue) => state.recipeReducer.recipes)
  const favoritesCnt = recipes.filter(item => item.favorite).length
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar>
        <Toolbar>
          <Link href="/" sx={{ textDecoration: 'none', flexGrow: 1 }}>
            <Typography sx={{ color: 'white', fontWeight: '600' }}>EngagedMD</Typography>
          </Link>
          <Box component={'div'} >
            <Link href="/likes">
              <Typography sx={{ color: 'white' }}>{`Favorites(${favoritesCnt})`}</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;