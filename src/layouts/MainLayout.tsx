import Box from '@mui/material/Box';
import React, { PropsWithChildren } from 'react';

const MainLayout: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return (
    <Box component={'div'}>
      <Box m={10}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;