
   
import * as React from 'react';
import type { NextPage } from 'next';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Details: NextPage = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundColor: '#f1efea',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
             YOU'RE INVITED 
            </Typography>
          </Box>
        </Grid>
      </Grid>
  );
};

export default Details;
