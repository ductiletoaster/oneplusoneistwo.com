import * as React from "react"
import type { NextPage } from "next"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Copyright from "../src/Copyright"

const Home: NextPage = () => {
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
            textTransform: "uppercase",
            mb: 4,
          }}
        >
          You&apos;re Invited
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"We welcome you to join us and come celebrate our wedding!"}
        </Typography>
        <Box
          sx={{
            py: 2,
            px: 4,
            mb: 4,
          }}
        >
          <TextField
            id="password"
            label="Password"
            variant="standard"
            onChange={(e) => {
              if (e.target?.value === "woot") {
                window.location.href = "/details"
              }
            }}
          />
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

export default Home
