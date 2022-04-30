import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/Copyright';

const Details: NextPage = () => {
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
        <Box sx={{
          py: 2,
          px: 4,
          mb: 4
        }}>
        <Grid container spacing={2.5} alignContent="center" alignItems="center" justifyContent="center" textAlign="center">


        <Grid item>
          <Typography variant="subtitle1" component="h2" gutterBottom>
            WE CAN&apos;T WAIT FOR YOU TO JOIN US ON OUR WEDDING DAY!
            <br />
            HERE ARE SOME TIPS TO HELP YOU MAKE THE MOST OF IT:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" component="h1" gutterBottom>
            THE DETAILS
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' component="p" gutterBottom>
            A blocker of rooms has been reserved for your convience at the hotel. Please mention the Gebel-Olivas wedding when making reservations.
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant='body1' component="p" gutterBottom>
            The ceremony will be held in the courtyard while cocktails, dinner and entertainment will be held in the beautiful gardens.
          </Typography>
        </Grid>
        </Grid>
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

export default Details;