import React from 'react';
import NavigationRoute from './navigations';
import ResponsiveAppBar from 'shared/ResponsiveAppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: '#EEEEEE', height: '100vh' }}>
        <ResponsiveAppBar />
        <Box
          sx={{
            mt: 2,
            px: 2,
          }}
        >
          <NavigationRoute />
        </Box>
      </Box>
    </Container>
  );
};
export default App;
