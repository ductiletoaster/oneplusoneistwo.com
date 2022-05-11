import { useEffect } from 'react'
import { useRouter } from 'next/router'

import languageDetector from 'next-language-detector'
import i18nextConfig from '../next-i18next.config'

export function useRedirect(to?: string) {
  const router = useRouter()
  const detect = languageDetector({
    supportedLngs: i18nextConfig.i18n.locales,
    fallbackLng: i18nextConfig.i18n.defaultLocale
  });
  const toPath = to || router.asPath

  // language detection
  useEffect(() => {
    const detectedLng = detect.detect() ?? '';
    if (detect?.cache) {
      detect.cache(detectedLng);
    }
    let redirectPath = detectedLng ? `/${detectedLng}${toPath}` : toPath;
    if (toPath.startsWith(`/${detectedLng}`) && router.route === '/404') { // prevent endless loop
      redirectPath = `/${detectedLng}${router.route}`;
    }
    console.log(`Detected Language: ${detectedLng}`);
    console.log(`Requested Path: ${toPath}`);
    console.log(`Redirect Path: ${redirectPath}`);
    router.replace(redirectPath)
  })
};

