/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
  },
  trailingSlash: false,
  reactStrictMode: true,
};

module.exports = nextConfig;

