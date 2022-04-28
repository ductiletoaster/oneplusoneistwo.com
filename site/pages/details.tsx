import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Details: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: "url(/centerpiece.svg)",  
          backgroundPosition: "10",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <Grid container spacing={2.5} alignContent="center" alignItems="center" justifyContent="center" textAlign="center">
          <Grid item>
            <Typography variant="h2" component="h1" gutterBottom>
              DETAILS
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="subtitle1" component="h2" gutterBottom>
              WE CAN&apos;T WAIT FOR YOU TO JOIN US ON OUR WEDDING DAY!
              <br />
              HERE ARE SOME TIPS TO HELP YOU MAKE THE MOST OF IT:
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
      <Box style={{
        width: "100%",
        height: "400px",
        backgroundImage: "url(/nature-scape.svg)",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "fixed",
        bottom: 0,
        left: 0
      }}/>
    </Container>
  );
};

export default Details;
