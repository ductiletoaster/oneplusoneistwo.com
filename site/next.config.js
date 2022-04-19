// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = nextConfig;

// module.exports = withPlugins([
//   [optimizedImages, {
//     /* config for next-optimized-images */
//     optimizeImages: false,
//   }],
//   // your other plugins here
// ], nextConfig);
