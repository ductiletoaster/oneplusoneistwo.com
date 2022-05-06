// const { i18n } = require('./next-i18next.config');
// https://dev.to/adrai/static-html-export-with-i18n-compatibility-in-nextjs-8cd

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // @todo re-enable for serveri side rendering
  // i18n,
  async rewrites() {
    return [
      {
        source: "/en/:path*",
        destination: "/:path*/?lang=en",
      },
      {
        source: "/es/:path*",
        destination: "/:path*/?lang=es",
      },
    ]
  },
}

module.exports = nextConfig
