import * as React from "react"
import type { NextPage } from "next"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Copyright from "../src/Copyright"
import Flower from "../src/Flower"
import LanguageMenu from "../src/LanguageMenu"
import { useRouter } from 'next/router'
import { useTranslation } from "next-export-i18n"

const Home: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation();

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
          {t("Guess What?")}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{mb: 4}}>
          {t("We're getting married!")}
        </Typography>
        <Typography variant="body1" component="h3" gutterBottom>
          {t("We welcome you to join us to celebrate our wedding! Please enter your name below for more details.")}
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
            label={t("Name")}
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

export default Home
