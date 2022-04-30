/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/en/:path*',
        destination: '/:path*/?lang=en',
      }, {
        source: '/es/:path*',
        destination: '/:path*/?lang=es',
      }
    ]
  },
}

module.exports = nextConfig
