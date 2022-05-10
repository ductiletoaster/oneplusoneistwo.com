import * as React from "react"
import type { NextPage } from "next"
import { useRouter } from 'next/router'
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import Copyright from "../../src/Copyright"
import Flower from "../../src/Flower"
import LanguageMenu from "../../src/LanguageMenu"
import { getStaticPaths, makeStaticProps } from "../../src/getStatic"

const Home: NextPage = () => {
  const router = useRouter();

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
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: "4.50rem",
            fontStyle: "italic",
            mb: 4,
          }}
        >
          Guess What?
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{mb: 4}}>
          We&apos;re getting married!
        </Typography>
        <Typography variant="body1" component="h3" gutterBottom>
          We welcome you to join us in celebrating our wedding! Please enter your name below for more details.
        </Typography>
        <Box
          sx={{
            py: 2,
            px: 4,
            mb: 4,
          }}
        >
          <TextField
            id="name"
            label="Name"
            variant="standard"
            onChange={(e) => {
              const name = e.target?.value;
              if (name === "brian") {
                router.push({ pathname: "/details", query: { name } })
              }
            }}
          />
        </Box>
        <Typography variant="body1">
          Macy &amp; Brian
        </Typography>
        <Typography variant="body2">
          11.11.2022
        </Typography>
        <Flower />
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
          <LanguageMenu />
        </Container>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}

const getStaticProps = makeStaticProps(['common'])

export default Home
export { 
  getStaticPaths, 
  getStaticProps
}