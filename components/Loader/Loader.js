import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Set the desired height for the page loader
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loader;