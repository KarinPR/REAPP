import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// import Navbar from './Navbar';
// import Footer from './Footer';

function Layout({ children }) {
  return (
    <Typography variant="h4">
      <main>{children}</main>
    </Typography>
  );
}

export default Layout;
