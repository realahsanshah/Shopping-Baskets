import { Box, Container } from '@material-ui/core';
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
          Product
        </Box>
        <Box mt={5} mb={5}>
          Basket
        </Box>
      </Container>
    </div>
  );
}

export default App;
