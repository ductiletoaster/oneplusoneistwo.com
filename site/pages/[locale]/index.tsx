import * as React from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import Copyright from "../../src/Copyright"
import Flower from "../../src/Flower"
import LanguageMenu from "../../src/LanguageMenu"
import { getStaticPaths, makeStaticProps } from "../../src/getStatic"
import useLocale from "../../src/useLocale"

const Home: NextPage = () => {
  const locale = useLocale();
  const router = useRouter();
  const { t } = useTranslation("home");

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
            fontStyle: "italic",
            mb: 4,
          }}
        >
          Brian &amp; Macy
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
          {t(`We're getting married!`)}
        </Typography>
        <Box
          sx={{
            mb: 4,
          }}
        >
          <Flower height="150px" width="75px" />
        </Box>
        <Typography variant="body1" component="h3" gutterBottom>
          {t(
            `We welcome you to join us in celebrating our wedding!`
          )}
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
            label={t(`Password`)}
            variant="standard"
            onChange={(e) => {
              const passwords = ["olivas-gebel", "olivasgebel", "olivas gebel"];
              const name = e.target?.value
              if (passwords.includes(name.toLowerCase())) {
                router.push({ pathname: `/${locale}/details`})
              }
            }}
          />
        </Box>
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

const getStaticProps = makeStaticProps(["home"])

export default Home
export { getStaticPaths, getStaticProps }
