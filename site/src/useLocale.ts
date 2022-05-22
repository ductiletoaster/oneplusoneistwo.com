import { useRouter } from "next/router"

export const supportedLanguages = ["en", "es"];
export const defaultLanguage = "en"

export default function useLocale() {
    const router = useRouter()
    return Array.isArray(router.query?.locale)
      ? router.query.locale[0]
      : router.query?.locale || defaultLanguage
}