import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2.5} alignContent="center" alignItems="center" justifyContent="center" textAlign="center">
          <Grid item xs={12}>
            <Typography variant="h1" component="h1" gutterBottom>
              Macy y Brian
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" gutterBottom>
              You are invited to our wedding!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="p" gutterBottom>
              Please enter the password provided to you.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField id="password" label="Password" variant="outlined" fullWidth onKeyUpCapture={(e) => {
              if (e.target?.value === "woot") {
                window.location.href = '/details'
              }
            }} />
          </Grid>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
