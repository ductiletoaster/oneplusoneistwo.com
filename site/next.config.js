// @todo get working example of translations

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // @todo Can this replace the comonent method?
  // async rewrites() {
  //   return [
  //     {
  //       source: "/en/:path*",
  //       destination: "/:path*/?lang=en",
  //     },
  //     {
  //       source: "/es/:path*",
  //       destination: "/:path*/?lang=es",
  //     },
  //   ]
  // },
}

module.exports = nextConfig
