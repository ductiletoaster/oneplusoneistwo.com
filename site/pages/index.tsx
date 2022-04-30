import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
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
        textAlign: "center"
      }}
    >
      <Container 
        component="main" 
        sx={{ 
          mt: 8, 
          mb: 2,
        }} 
        maxWidth="sm">
        <Typography variant="h1" component="h1" gutterBottom>
          You're Invited
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Box sx={{
          py: 2,
          px: 4,
          mb: 4
        }}>
          <TextField id="password" label="Password" variant="standard" />
        </Box>
        <Typography variant="body1">Macy &amp; Brian</Typography>
        <Typography variant="body2">11.11.2022</Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
