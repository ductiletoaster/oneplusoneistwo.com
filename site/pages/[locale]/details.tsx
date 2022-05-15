import * as React from "react"
import type { NextPage } from "next"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

import Copyright from "../../src/Copyright"
import { getStaticPaths, makeStaticProps } from "../../src/getStatic"

const Details: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Container
        component="main"
        sx={{
          mt: 8,
          mb: 2,
        }}
        maxWidth="sm"
      >
        <Box
          sx={{
            py: 2,
            px: 4,
            mb: 4,
          }}
        >
          <Grid
            container
            spacing={2.5}
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Grid item>
              <Typography
                variant="subtitle1"
                component="h2"
                gutterBottom
                sx={{ fontStyle: "italic" }}
              >
                Together with their families,
                <br />
                Macy Olivas and Brian Gebel request your presence on their
                wedding day Friday the eleventh of November two thousand and
                twenty two at <br />
                The Guild Hotel in San Diego.
              </Typography>
            </Grid>
            <Grid item sx={{m: 2}}>
              <Typography variant="h2" component="h1" gutterBottom>
                THE DETAILS
              </Typography>
            </Grid>

            <Grid item sx={{mb: 2}}>
              <Typography variant="h5" component="h5" gutterBottom>
                Ceremony and Reception
              </Typography>
              {/* <Divider orientation="vertical" flexItem>
                VERTICAL
              </Divider> */}
              <Typography variant="body1" component="p" gutterBottom>
                The ceremony will be held in the courtyard while cocktails,
                dinner and entertainment will be held in the beautiful garden.
              </Typography>
              <br />
              <Typography variant="body1" component="p" gutterBottom>
                Friday, November 11th, 2022 2:00pm
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                500 W Broadway, San Diego, CA 92101
              </Typography>
              <br />
              <Button variant="outlined" href="https://g.page/theguildhotel?share" target="_blank">
                View Map
              </Button>
            </Grid>

            <Grid item sx={{m: 2}}>
              <Typography variant="h5" component="h5" gutterBottom>
                Accomodations
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                A limited number of rooms has been reserved at the venue for your convience at the
                The Guild. Please let us know if you are interested in a room so we
                provide additional details.
              </Typography>
              <Button variant="outlined" href="https://www.airbnb.com/san-diego-ca/stays" target="_blank" sx={{m: 1}}>
                Airbnb
              </Button>
              <Button variant="outlined" href="https://www.google.com/travel/hotels/San%20Diego?q=Downtown%20San%20Diego%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4743124%2C4757164%2C4758493%2C4762561%2C4771573%2C4779397&hl=en-US&gl=us&cs=1&ssta=1&rp=ogEhRG93bnRvd24gU2FuIERpZWdvLCBTYW4gRGllZ28sIENBOAFAAEgC&ap=MAFazQIKBQjIARAAIgNVU0QqFgoHCOYPEAUYERIHCOYPEAUYEhgBIAGwAQBYAWgBcgQIAhgAmgEjEiFEb3dudG93biBTYW4gRGllZ28sIFNhbiBEaWVnbywgQ0GiARUKCC9tLzA3MXZyEglTYW4gRGllZ2-qAQ8KAggSEgMImwESAghoGAGqAQoKAggUEgIIGxgBqgEjCgIIHBIDCJcBEgIIURICCFgSAghzEgIIRxICCDYSAghNGAGqAQ4KAgglEgIIdBICCHUYAaoBFgoCCBESAgg4EgIIVxICCAISAgh_GAGqATEKAgguEgIIOxICCFYSAwiHARICCD0SAwiBARICCEsSAghTEgMIjwESAggoEgIIJxgBqgEGCgIILBgAqgEHCgMItwIYAKoBBgoCCDMYAKoBFwoCCDUSAggeEgIIExICCDISAwiWARgBkgECIAFoAA&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaRQonEiM6IURvd250b3duIFNhbiBEaWVnbywgU2FuIERpZWdvLCBDQRoAEhoSFAoHCOYPEAsYCxIHCOYPEAsYDBgBMgIIASoLCgcoAToDVVNEGgA&ved=0CAAQ5JsGahcKEwiAtPPg9OH3AhUAAAAAHQAAAAAQbA" target="_blank" sx={{m: 1}}>
                Hotels
              </Button>
            </Grid>

            <Grid item sx={{m: 2}}>
              <Typography variant="h5" component="h5" gutterBottom>
                Registry
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                Your attendance is all we hope and wish for on our special day. We've provided a registry for convenience. 
              </Typography>
              <Button variant="outlined" href="https://www.airbnb.com/san-diego-ca/stays" target="_blank" sx={{m: 1}}>
                Gifts
              </Button>
              <Button variant="outlined" href="https://www.google.com/travel/hotels/San%20Diego?q=Downtown%20San%20Diego%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4743124%2C4757164%2C4758493%2C4762561%2C4771573%2C4779397&hl=en-US&gl=us&cs=1&ssta=1&rp=ogEhRG93bnRvd24gU2FuIERpZWdvLCBTYW4gRGllZ28sIENBOAFAAEgC&ap=MAFazQIKBQjIARAAIgNVU0QqFgoHCOYPEAUYERIHCOYPEAUYEhgBIAGwAQBYAWgBcgQIAhgAmgEjEiFEb3dudG93biBTYW4gRGllZ28sIFNhbiBEaWVnbywgQ0GiARUKCC9tLzA3MXZyEglTYW4gRGllZ2-qAQ8KAggSEgMImwESAghoGAGqAQoKAggUEgIIGxgBqgEjCgIIHBIDCJcBEgIIURICCFgSAghzEgIIRxICCDYSAghNGAGqAQ4KAgglEgIIdBICCHUYAaoBFgoCCBESAgg4EgIIVxICCAISAgh_GAGqATEKAgguEgIIOxICCFYSAwiHARICCD0SAwiBARICCEsSAghTEgMIjwESAggoEgIIJxgBqgEGCgIILBgAqgEHCgMItwIYAKoBBgoCCDMYAKoBFwoCCDUSAggeEgIIExICCDISAwiWARgBkgECIAFoAA&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaRQonEiM6IURvd250b3duIFNhbiBEaWVnbywgU2FuIERpZWdvLCBDQRoAEhoSFAoHCOYPEAsYCxIHCOYPEAsYDBgBMgIIASoLCgcoAToDVVNEGgA&ved=0CAAQ5JsGahcKEwiAtPPg9OH3AhUAAAAAHQAAAAAQbA" target="_blank" sx={{m: 1}}>
                Experiances
              </Button>
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
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}

const getStaticProps = makeStaticProps(["common"])

export default Details
export { getStaticPaths, getStaticProps }