import * as React from "react"
import Button from "@mui/material/Button"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { useRouter } from "next/router"

const supportedLanguages = ["en", "es"]
const defaultLanguage = "en"

export default function LanguageMenu() {
  const router = useRouter()
  const selectedLanguage = Array.isArray(router.query?.locale)
    ? router.query.locale[0]
    : router.query?.locale || defaultLanguage

  return (
    <Tabs
      value={supportedLanguages.indexOf(selectedLanguage)}
      sx={{
        mb: 2,
      }}
      aria-label="language menu"
      centered
    >
      {supportedLanguages.map((lang, index) => (
        <Button href={`/${lang}`}>
          <Tab
            key={index}
            id={`simple-tab-${index}`}
            label={lang}
            value={index}
            aria-controls={`simple-tabpanel-${index}`}
          />
        </Button>
      ))}
    </Tabs>
  )
}
