import React from 'react';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <MainContent>
        <Component {...pageProps} />
      </MainContent>
      <Footer />
    </>
  );
}

export default MyApp;
