import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled('footer')(({ theme }) => ({
  padding: theme.spacing(3, 2),
  marginTop: 'auto',
  backgroundColor: theme.palette.grey[200],
}));

function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="sm">
        <Typography variant="body1">Real Estate Scroller © 2023</Typography>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
