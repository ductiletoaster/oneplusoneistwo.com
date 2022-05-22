import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import useLocale, { supportedLanguages } from "./useLocale"

export default function LanguageMenu() {
  const locale = useLocale();
  return (
    <Tabs
      value={supportedLanguages.indexOf(locale)}
      sx={{
        mb: 2,
      }}
      aria-label="language menu"
      centered
    >
      {supportedLanguages.map((lang, index) => (
          <Tab
            key={index}
            id={`simple-tab-${index}`}
            href={`/${lang}`}
            label={lang}
            value={index}
            aria-controls={`simple-tabpanel-${index}`}
          />
      ))}
    </Tabs>
  )
}
