import React from 'react';
import { Container, Typography } from '@mui/material';

function MainContent() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h6" gutterBottom>
        Welcome to Real Estate Scroller
      </Typography>
      <Typography variant="body1">
        Use this platform to research and analyze real estate markets, find agents, view listings, and manage your CRM.
      </Typography>
    </Container>
  );
}

export default MainContent;
