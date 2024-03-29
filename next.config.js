/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "assets.coingecko.com"],
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
