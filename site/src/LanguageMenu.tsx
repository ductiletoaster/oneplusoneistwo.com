import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { useLanguageQuery, LanguageSwitcher } from "next-export-i18n"

const supportedLanguages = ["en", "es"]
const defaultLanguage = "en"

export default function LanguageMenu() {
  const [query] = useLanguageQuery()
  const selectedLanguage = query?.lang || defaultLanguage
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
        <LanguageSwitcher lang={lang} key={index}>
          <Tab
            id={`simple-tab-${index}`}
            label={lang}
            value={index}
            aria-controls={`simple-tabpanel-${index}`}
          />
        </LanguageSwitcher>
      ))}
    </Tabs>
  )
}
