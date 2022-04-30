import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: "#111111"
        }}
      >
          <Box style={{
            width: "100%",
            height: "400px",
            backgroundImage: "url(/nature-scape.svg)",
            backgroundPosition: "left bottom",
            backgroundRepeat: "repeat-x",
            backgroundSize: "contain",
            position: "fixed",
            bottom: "64px",
            left: 0
          }}/>
        <Container maxWidth="sm">

          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
