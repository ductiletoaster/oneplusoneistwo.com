import * as React from "react"
import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document"
import createEmotionServer from "@emotion/server/create-instance"
import theme from "../src/theme"
import createEmotionCache from "../src/createEmotionCache"
import i18nextConfig from "../next-i18next.config"

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: React.ReactNode[]
  locale: string
}
export default class MyDocument extends Document<MyDocumentProps> {
  render() {
    const { emotionStyleTags, locale } = this.props
    return (
      <Html lang={locale}>
        <Head>
          {/* PWA primary color */}
          <meta name="description" content="" />

          <meta property="og:url" content="https://oneplusoneistwo.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="/static/grayscale-flower-1.svg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="" />
          <meta property="twitter:url" content="https://oneplusoneistwo.com/" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content="/static/grayscale-flower-1.svg" />
          
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))
  const locale = Array.isArray(ctx.query?.locale)
    ? ctx.query.locale[0]
    : ctx.query?.locale || i18nextConfig.i18n.defaultLocale
  return {
    ...initialProps,
    emotionStyleTags,
    locale,
  }
}
